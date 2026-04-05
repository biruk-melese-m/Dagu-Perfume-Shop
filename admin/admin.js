// ════════════════════════════════════════════
//  GLOBAL STATE VARIABLES
//  All shared variables used across the admin dashboard — orders, filters, tabs, and UI state.
// ════════════════════════════════════════════

let allOrders = [];               // Full list of all orders loaded from Firestore
let filteredOrders = [];          // Orders currently visible based on active tab and search
let unsubscribe = null;           // Firestore real-time listener unsubscribe function
let currentOrderDetails = null;   // The order currently open in the detail modal
let lastCount = -1;               // Tracks active order count to detect new incoming orders
let activeTab = 'orders';         // Which main tab is currently shown: orders/products/tools
let activeOrderTab = 'Pending';   // Sub-tab within Orders: Pending/Confirmed/Rejected/Deleted
let activeProductTab = 'Active';  // Sub-tab within Catalogue: Active or Deleted (Trash)
let currentFilters = { category: [], type: [], scent: [], price: [] }; // Active product filter state
let selectedProductsToMerge = new Set(); // Tracks which product IDs are checked for bulk actions

// ── UTILITY: FORMATTERS ────────────────────────────────────────
// Converts numbers/dates into human-readable strings used throughout the dashboard.

function formatPrice(n) {
  return Number(n).toLocaleString('en-ET') + ' Br';
}

function formatDate(fbTimestamp) {
  if (!fbTimestamp) return 'Just now';
  const d = fbTimestamp.toDate ? fbTimestamp.toDate() : new Date(fbTimestamp);
  return d.toLocaleString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
}

// Returns a styled HTML badge span for a given order status.
// Used in the orders table to visually indicate Pending, Confirmed, Rejected, etc.
function getStatusBadge(status) {
  const s = (status || 'Pending').toLowerCase();
  return `<span class="badge ${s}">${s}</span>`;
}

// ── ORDER DATA LOADING (REAL-TIME) ────────────────────────────
// Opens a Firestore real-time listener on the 'orders' collection.
// Auto-updates the dashboard whenever any order is added, changed, or deleted.
function loadOrders() {
  const tbody = document.getElementById('ordersTableBody');
  tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 30px;">Loading orders...</td></tr>';

  if (!db || typeof db.collection !== 'function') {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 30px; color: #e68e9e;">Firebase is not configured correctly. Check firebase-config.js.</td></tr>';
    return;
  }

  if (unsubscribe) unsubscribe(); // Cancel any previous listener before starting a new one

  unsubscribe = db.collection("orders").orderBy("timestamp", "desc").onSnapshot(snapshot => {
    allOrders = [];
    let pendingCount = 0;
    let confirmedCount = 0;
    let revenue = 0;

    snapshot.forEach(doc => {
      const data = doc.data();
      data.id = doc.id;
      if (!data.status) data.status = 'Pending';
      const refId = 'DGU-' + data.id.slice(-6).toUpperCase(); // Create human-readable ref ID
      data.refId = refId;
      allOrders.push(data);

      if (!data.deleted) {
        if (data.status === 'Pending') pendingCount++;
        if (data.status === 'Confirmed') { confirmedCount++; revenue += Number(data.totalAmount || 0); }
      }
    });

    const activeOrdersOnly = allOrders.filter(o => !o.deleted);
    if (lastCount !== -1 && activeOrdersOnly.length > lastCount) {
       playSuccessSound(); // Play alert sound when a new order arrives
    }
    lastCount = activeOrdersOnly.length;

    filterOrders();
    updateStatsDisplay(pendingCount, confirmedCount, revenue, activeOrdersOnly.length);
  }, error => {
    console.error("Error fetching orders:", error);
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 30px; color: #e68e9e;">Error fetching orders: ${error.message}</td></tr>`;
  });
}

// ── ORDER FILTERING & TABLE RENDERING ─────────────────────────
// Filters allOrders based on active tab (Pending/Confirmed/etc.) and the search box.
// The result is stored in filteredOrders and immediately rendered to the table.
function filterOrders() {
  const q = document.getElementById('mainSearch')?.value.toLowerCase().trim() || '';
  
  filteredOrders = allOrders.filter(o => {
    // 1. Filter by Tab
    if (activeOrderTab === 'Deleted') {
      if (!o.deleted) return false;
    } else {
      if (o.deleted) return false;
      if (activeOrderTab === 'Pending' && o.status !== 'Pending') return false;
      if (activeOrderTab === 'Confirmed' && o.status !== 'Confirmed') return false;
      if (activeOrderTab === 'Rejected' && !(o.status === 'Rejected' || o.status === 'Cancelled')) return false;
    }

    // 2. Filter by Search Query
    if (q) {
      return o.refId.toLowerCase().includes(q) ||
        (o.customerName || '').toLowerCase().includes(q) ||
        (o.customerPhone || '').toLowerCase().includes(q) ||
        (o.transactionId || '').toLowerCase().includes(q);
    }
    return true;
  });

  renderTable();
}

// Switches the active order sub-tab (Pending, Confirmed, Rejected, Deleted).
// Updates the nav highlight and re-runs the filter to show the right orders.
function switchOrderTab(tab, el) {
  activeOrderTab = tab;
  document.querySelectorAll('.osn-item').forEach(item => item.classList.remove('active'));
  el.classList.add('active');
  filterOrders();
}

// Clears all orders in the currently visible tab.
// In Trash tab: permanently deletes them. In other tabs: soft-deletes (moves to Trash).
async function clearCurrentTab() {
  if (!filteredOrders.length) return;
  const count = filteredOrders.length;
  const msg = activeOrderTab === 'Deleted' 
    ? `Are you sure you want to PERMANENTLY delete all ${count} orders in the Trash? This cannot be undone.`
    : `Are you sure you want to move all ${count} orders in this tab to the Trash?`;
    
  if (!confirm(msg)) return;

  const batch = db.batch();
  for (const o of filteredOrders) {
    const ref = db.collection("orders").doc(o.id);
    if (activeOrderTab === 'Deleted') {
      batch.delete(ref);
    } else {
      batch.update(ref, { deleted: true });
    }
  }

  try {
    await batch.commit();
    showToast(`${count} orders cleared`);
  } catch (e) {
    alert("Batch operation failed: " + e.message);
  }
}

// Renders the filtered order list into the HTML table.
// Each row shows ref ID, date, customer, amount, status badge, and action buttons.
function renderTable() {
  const tbody = document.getElementById('ordersTableBody');
  if (filteredOrders.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 30px;">No results match your criteria.</td></tr>';
    return;
  }

  tbody.innerHTML = filteredOrders.map((o, idx) => `
    <tr class="order-row reveal" style="--i: ${idx}">
      <td class="order-ref-col">
        <div class="o-ref">${o.refId}</div>
        <div class="o-id-sub">${o.id.slice(0, 8)}...</div>
      </td>
      <td class="order-date-col">${formatDate(o.timestamp)}</td>
      <td class="order-user-col">
        <div class="o-cust">${o.customerName || 'Anonymous'}</div>
        <div class="o-phone">${o.customerPhone || 'Silent'}</div>
      </td>
      <td class="order-amount-col">
        <div class="o-amt">${formatPrice(o.totalAmount || 0)}</div>
        <div class="o-method">${o.paymentMethod || '???'}</div>
      </td>
      <td class="order-status-col">${getStatusBadge(o.status)}</td>
      <td class="order-actions-col">
        <div class="quick-actions">
          <button class="qa-btn" onclick="viewOrder('${o.id}')" title="Full Intelligence">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </button>
          
          ${o.deleted ? `
          <button class="qa-btn" onclick="restoreOrder('${o.id}')" title="Restore Order" style="color:#d4ca9d; border-color:rgba(212,202,157,0.3);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
          </button>
          ` : `
            ${o.status === 'Pending' ? `<button class="qa-btn qa-approve" onclick="quickUpdate('${o.id}', 'Confirmed')" title="Instant Confirm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </button>` : ''}
            ${(o.status === 'Pending' || o.status === 'Confirmed') ? `<button class="qa-btn qa-cancel" onclick="quickUpdate('${o.id}', 'Rejected')" title="Reject Order">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>` : ''}
          `}

          <button class="qa-btn" onclick="deleteOrder('${o.id}', ${!!o.deleted})" title="${o.deleted ? 'Delete Permanently' : 'Move to Trash'}" style="color:#e68e9e; border-color:rgba(230,142,158,0.2);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

// ── ORDER ACTIONS ──────────────────────────────────────
// Quick one-click status update directly from the orders table row.
// Instantly changes an order to Confirmed or Rejected without opening the modal.
async function quickUpdate(id, status) {
  try {
    await db.collection("orders").doc(id).update({ status });
    showToast('Order status updated in real-time');
  } catch (e) {
    alert("Field update failed: " + e.message);
  }
}

// Restores a soft-deleted (trashed) order back to the active list.
// Sets the 'deleted' flag to false in Firestore, making it visible again.
async function restoreOrder(id) {
  try {
    await db.collection("orders").doc(id).update({ deleted: false });
    showToast('Order restored to active list');
  } catch (error) {
    console.error("Error restoring order:", error);
    alert("Operation failed: " + error.message);
  }
}

// Soft-deletes an order (moves to Trash) or permanently removes it.
// isPermanent=true when the order is already in Trash and needs full removal.
async function deleteOrder(id, isPermanent) {
  const msg = isPermanent ? 'Are you absolutely sure you want to PERMANENTLY delete this order?' : 'Move this order to Trash?';
  if (!confirm(msg)) return;
  if (!db || typeof db.collection !== 'function') return;

  try {
    if (isPermanent) {
      await db.collection("orders").doc(id).delete();
      showToast('Order permanently deleted');
    } else {
      await db.collection("orders").doc(id).update({ deleted: true });
      showToast('Order moved to Trash');
    }
  } catch (error) {
    console.error("Error deleting order:", error);
    alert("Operation failed: " + error.message);
  }
}

// ── ORDER DETAIL MODAL ──────────────────────────────────
// Opens the full detail popup for a single order when the eye icon is tapped.
// Populates customer info, GPS coordinates, items list, delivery notes, and total.
function viewOrder(id) {
  const order = allOrders.find(o => o.id === id);
  if (!order) return;
  currentOrderDetails = order;

  document.getElementById('modalTitle').textContent = `Order ${order.refId}`;
  document.getElementById('modalCustomerName').textContent = order.customerName || '--';
  document.getElementById('modalCustomerPhone').textContent = order.customerPhone || '--';
  document.getElementById('modalTxId').textContent = order.transactionId || '--';
  document.getElementById('modalPayMethod').textContent = order.paymentMethod || '--';
  document.getElementById('modalDate').textContent = formatDate(order.timestamp);
  document.getElementById('modalSefer').textContent = order.customerSefer || '--';
  document.getElementById('modalDeliveryNotes').textContent = order.deliveryNotes || 'No specific instructions provided.';

  // Location / coordinates
  const coordText = document.getElementById('coordText');
  const btnMaps = document.getElementById('btnMaps');
  const coords = order.customerCoords;
  if (coords && coords.lat && coords.lon) {
    coordText.textContent = `${coords.lat.toFixed(6)}, ${coords.lon.toFixed(6)}`;
    btnMaps.style.display = 'inline-flex';
    btnMaps.href = `https://www.google.com/maps?q=${coords.lat},${coords.lon}`;
  } else {
    coordText.textContent = 'No coordinates shared.';
    btnMaps.style.display = 'none';
  }

  const select = document.getElementById('modalStatusSelect');
  select.value = order.status || 'Pending';

  // Render Items
  const itemsList = document.getElementById('modalItemsList');
  if (order.items && order.items.length > 0) {
    itemsList.innerHTML = order.items.map(i => {
      // Find image from ALL if possible
      const p = ALL.find(x => x.no === i.no);
      const imgSrc = p ? p.image : '';

      return `
      <div class="order-item-row">
        <div class="o-thumb">
          ${imgSrc ? `<img src="${imgSrc}" onerror="handleImgErr(this)">` : '<div class="o-no-img">?</div>'}
        </div>
        <div class="order-item-main">
          <div class="o-name">${i.brand} ${i.name}</div>
          <div class="o-meta">Size: ${i.size || 'N/A'} | Qty: ${i.qty}</div>
        </div>
        <div class="o-price">${formatPrice((i.price || 0) * (i.qty || 1))}</div>
      </div>`;
    }).join('');
  } else {
    itemsList.innerHTML = '<div style="color: rgba(255,255,255,0.5); font-size: 13px;">No items recorded.</div>';
  }

  document.getElementById('modalTotal').textContent = `Total: ${formatPrice(order.totalAmount || 0)}`;

  document.getElementById('orderModalBackdrop').classList.add('open');
  document.getElementById('orderModal').classList.add('open');
}

// Closes the order detail modal and clears the currentOrderDetails reference.
// Called by the ✕ button or clicking the backdrop overlay.
function closeOrderModal() {
  document.getElementById('orderModalBackdrop').classList.remove('open');
  document.getElementById('orderModal').classList.remove('open');
  currentOrderDetails = null;
}

// Updates the four top stat cards: total active orders, pending, confirmed, and revenue.
// Only counts non-deleted orders to keep the dashboard numbers accurate.
function updateStatsDisplay(pending, completed, revenue, totalActive) {
  document.getElementById('statTotal').textContent = totalActive;
  document.getElementById('statPending').textContent = pending;
  document.getElementById('statCompleted').textContent = completed;
  document.getElementById('statRevenue').textContent = formatPrice(revenue);
}

function handleSearch() {
  filterOrders();
}

// Plays a short audio notification alert when a new order is detected.
// Only triggers when the active order count increases — not on restores or deletions.
function playSuccessSound() {
  const audio = document.getElementById('notifSound');
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(e => console.log('Audio wait for user', e));
  }
}

function showToast(msg) {
  console.log(msg);
}

// Saves a new status to Firestore for the order currently open in the detail modal.
// The Firestore snapshot listener will auto-refresh the table when the save completes.
async function updateOrderStatus() {
  if (!currentOrderDetails) return;
  const newStatus = document.getElementById('modalStatusSelect').value;
  const orderId = currentOrderDetails.id;

  try {
    await db.collection("orders").doc(orderId).update({
      status: newStatus
    });
    // The snapshot listener will automatically catch the update and re-render the table
  } catch (error) {
    console.error("Error updating status:", error);
    alert("Failed to update status. Please try again.");
  }
}

// ── INITIALIZATION ────────────────────────────────────
// App initialization after page load without authentication.

document.addEventListener("DOMContentLoaded", async () => {
  // Initial data load
  loadOrders();
  loadSavedNotes();
  await initProducts();
  renderProducts();
  initReveal();

  console.log("Admin Dashboard Loaded");
});



// ── IMAGE ERROR FALLBACK ──────────────────────────────
// Handles broken product image URLs by trying the alternate photo folder path.
// If both paths fail, the image is dimmed instead of showing a broken icon.
function handleImgErr(img) {
  if (img.dataset.triedFallback) {
    img.style.opacity = '0.1'; // Dim instead of hiding in admin
    return;
  }
  img.dataset.triedFallback = "true";
  const current = img.src;
  if (current.includes('Perfume%20Photos%201')) {
    img.src = current.replace('Perfume%20Photos%201', 'Perfume%20Photos');
  } else if (current.includes('Perfume%20Photos')) {
    img.src = current.replace('Perfume%20Photos', 'Perfume%20Photos%201');
  }
}

// ── SCROLL REVEAL ANIMATION ───────────────────────────
// Uses IntersectionObserver to fade in order rows as they appear on screen.
// Gives the orders table a smooth animated entrance when content loads.
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  // Removed .reveal from prod-item to ensure visibility in admin
  document.querySelectorAll('.order-row.reveal').forEach(el => observer.observe(el));
}

// ── SIDEBAR TOGGLE ────────────────────────────────────
// Opens or closes the left navigation sidebar when the hamburger button is tapped.
// Adds/removes CSS classes on the body and sidebar element to drive the animation.
function toggleSidebar() {
  const sidebar = document.getElementById('dotSidebar');
  const isOpen = sidebar.classList.contains('open');
  if (isOpen) {
    sidebar.classList.remove('open');
    document.body.classList.remove('sidebar-open');
  } else {
    sidebar.classList.add('open');
    document.body.classList.add('sidebar-open');
  }
}

// Silently closes the sidebar without toggling — used after selecting a nav item.
// Ensures the sidebar auto-hides on mobile after navigation without needing another tap.
function closeSidebar() {
  const sidebar = document.getElementById('dotSidebar');
  if (sidebar && sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
    document.body.classList.remove('sidebar-open');
  }
}

// ── PRODUCT FILTERS ──────────────────────────────────
// Toggles the active category filter (e.g. Kings, Queens, Unisex).
// Only one category can be active at a time — clicking the same one resets it.
function toggleCategory(cat, el) {
  const isActive = currentFilters.category.includes(cat);
  currentFilters.category = isActive ? [] : [cat];
  document.querySelectorAll('[onclick^="toggleCategory"]').forEach(btn => btn.classList.remove('active'));
  if (!isActive) el.classList.add('active');
  updateResetBtn();
  renderProducts();
}

// Toggles a scent filter (e.g. Oud, Fresh) and syncs all matching buttons across the UI.
// Any button anywhere that targets the same scent gets highlighted simultaneously.
function toggleScent(scnt, el) {
  const isActive = currentFilters.scent.includes(scnt);
  currentFilters.scent = isActive ? [] : [scnt];
  
  // Sync all buttons for the same scent across different UI areas
  document.querySelectorAll(`[onclick^="toggleScent"]`).forEach(btn => btn.classList.remove('active'));
  
  if (!isActive) {
    // Highlight all buttons that target this scent
    document.querySelectorAll(`[onclick*="'${scnt}'"]`).forEach(btn => btn.classList.add('active'));
  }
  
  updateResetBtn();
  renderProducts();
}

// Clears all active filters and re-renders the full unfiltered product list.
// Also hides the reset button and re-initialises the scroll reveal animation.
function resetCategories() {
  currentFilters = { category: [], type: [], scent: [], price: [] };
  document.querySelectorAll('.sel-btn, .topbar-filter-btn').forEach(btn => btn.classList.remove('active'));
  updateResetBtn();
  renderProducts();
  initReveal();
}

// Shows or hides the 'Reset Filters' button based on whether any filter is currently active.
function updateResetBtn() {
  const isAnyActive = currentFilters.category.length > 0 || currentFilters.scent.length > 0;
  document.getElementById('secResetBtn').classList.toggle('show', isAnyActive);
}

// ── MAIN TAB SWITCHING ────────────────────────────────
// Switches between the three main sections: Orders, Catalogue, and Tools.
// Updates the sidebar nav highlight, search placeholder, and shows/hides action buttons.
function switchTab(tabId) {
  activeTab = tabId;
  const sections = document.querySelectorAll('.tab-content');
  const dsItems = document.querySelectorAll('.ds-item');

  sections.forEach(s => s.classList.remove('active'));
  dsItems.forEach(n => n.classList.remove('active'));

  document.getElementById(tabId + 'Section').classList.add('active');
  const navId = 'navItem' + tabId.charAt(0).toUpperCase() + tabId.slice(1);
  if (document.getElementById(navId)) document.getElementById(navId).classList.add('active');
  
  const searchInput = document.getElementById('mainSearch');
  if (searchInput) {
    if (tabId === 'orders') searchInput.placeholder = 'Search orders, customers, refs...';
    else if (tabId === 'products') searchInput.placeholder = 'Filter catalogue...';
    else searchInput.placeholder = 'Search...';
    searchInput.value = '';
  }

  const addBtn = document.getElementById('btnAddProductTop');
  if (addBtn) addBtn.style.display = (tabId === 'products') ? 'block' : 'none';
  
  const mergeBtn = document.getElementById('btnMergeSelected');
  const delBtn = document.getElementById('btnDeleteSelected');
  const uncheckBtn = document.getElementById('btnUncheck');
  
  if (tabId === 'products') {
    if (uncheckBtn) uncheckBtn.style.display = (selectedProductsToMerge.size > 0) ? 'flex' : 'none';
    if (mergeBtn) mergeBtn.style.display = (selectedProductsToMerge.size > 1) ? 'flex' : 'none';
    if (delBtn) delBtn.style.display = (selectedProductsToMerge.size > 0) ? 'flex' : 'none';
    renderProducts();
  } else {
    if (uncheckBtn) uncheckBtn.style.display = 'none';
    if (mergeBtn) mergeBtn.style.display = 'none';
    if (delBtn) delBtn.style.display = 'none';
    if (tabId === 'orders') filterOrders();
  }

  closeSidebar();
}

// Routes the global search box to filter either orders or products based on which tab is open.
function handleGlobalSearch() {
  if (activeTab === 'orders') filterOrders();
  else if (activeTab === 'products') renderProducts();
}

// Switches between Active and Trash sub-tabs within the Catalogue section.
function switchProductTab(tab, el) {
  activeProductTab = tab;
  document.querySelectorAll('#productsSection .osn-item').forEach(item => item.classList.remove('active'));
  el.classList.add('active');
  renderProducts();
}

// ── PRODUCT CATALOGUE: INIT + RENDER ──────────────────────
// Loads Firestore product overrides on top of the local master-data.js catalogue.
// Also deduplicates products that share the same brand+name by merging their images.
async function initProducts() {
  if (typeof db !== 'undefined' && db) {
    try {
      const snap = await db.collection("products").get();
      snap.forEach(doc => {
        const data = doc.data();
        const existingIdx = ALL.findIndex(p => p.no === data.no);
        if (existingIdx >= 0) {
          ALL[existingIdx] = { ...ALL[existingIdx], ...data };
        } else {
          ALL.push(data);
        }
      });
    } catch (e) { console.warn("Could not load dynamic products", e); }
  }

  // ── MERGE DUPLICATES (Sync with Website) ──
  const mergedMap = new Map();
  const cleaned = [];

  ALL.forEach(p => {
    const key = `${p.brand.trim()}|${p.name.trim()}`.toLowerCase();
    if (mergedMap.has(key)) {
      const existing = mergedMap.get(key);
      if (!existing.images) existing.images = [existing.image];
      if (p.image && !existing.images.includes(p.image)) {
        existing.images.push(p.image);
      }
    } else {
      mergedMap.set(key, p);
      cleaned.push(p);
    }
  });

  ALL.length = 0;
  ALL.push(...cleaned);
}

// Renders the product grid based on current filters, search query, and active sub-tab.
// Groups products by section (Kings, Queens, Oud, etc.) with section headers and counts.
function renderProducts() {
  const grid = document.getElementById('prodGrid');
  if (!grid) return;

  const q = document.getElementById('mainSearch')?.value.toLowerCase() || '';
  const { category, scent } = currentFilters;
  const isSelectorActive = category.length > 0 || scent.length > 0;

  // Helper function to match product against current filters
  const matchFilter = (p) => {
    if (!p) return false;
    
    // Always filter by Trash vs Active (Products section now shows all unless deleted)
    // Actually, in the new simplified view, let's just show active items.
    if (p.deleted) return false;

    const name = (p.name || '').toLowerCase();
    const brand = (p.brand || '').toLowerCase();
    const no = String(p.no || '');
    
    const matchesSearch = name.includes(q) || brand.includes(q) || no.includes(q);

    if (!matchesSearch) return false;

    if (isSelectorActive) {
      const gCode = p.g || 'u';
      const pSecs = p.sections || [p.sec || 'misc'];

      let genderMatch = category.length === 0;
      if (category.includes('men') && gCode === 'm') genderMatch = true;
      if (category.includes('women') && gCode === 'w') genderMatch = true;
      if (category.includes('unisex') && gCode === 'u') genderMatch = true;

      let scentMatch = scent.length === 0;
      if (scent.includes('oud') && pSecs.includes('sec-oud')) scentMatch = true;
      if (scent.includes('fresh') && pSecs.includes('sec-fresh')) scentMatch = true;
      if (scent.includes('latest') && POPULAR_IDS['sec-latest'].includes(p.no)) scentMatch = true;
      if (scent.includes('favorites') && POPULAR_IDS['sec-favorites'].includes(p.no)) scentMatch = true;

      return genderMatch && scentMatch;
    }

    return true;
  };

  const SECTIONS_CONFIG = [
    { id: 'sec-unisex', title: 'Unified Collection (Unisex)' },
    { id: 'sec-kings', title: 'For Men (Kings)' },
    { id: 'sec-queens', title: 'For Women (Queens)' },
    { id: 'sec-latest', title: 'Latest & Trending Scents' },
    { id: 'sec-favorites', title: "Most People's Favorites" },
    { id: 'sec-oud', title: 'Oud & Arabian Treasures' },
    { id: 'sec-fresh', title: 'Fresh & Aquatic Collection' },
    { id: 'sec-sweet', title: 'Sweet & Gourmand' },
    { id: 'sec-woody', title: 'Woody & Intense' },
    { id: 'sec-designer', title: 'Designer Masterpieces' },
    { id: 'sec-sets', title: 'Curated Sets & Splashes' },
    { id: 'sec-other', title: 'Other Essentials' },
    { id: 'sec-misc', title: 'Miscellaneous' }
  ];

  let html = '';

  SECTIONS_CONFIG.forEach(sec => {
    let items = [];
    if (sec.id === 'sec-latest') {
      const latestIds = (typeof POPULAR_IDS !== 'undefined' && POPULAR_IDS['sec-latest']) || [];
      items = ALL.filter(p => latestIds.includes(p.no) && matchFilter(p));
    } else if (sec.id === 'sec-favorites') {
      const favIds = (typeof POPULAR_IDS !== 'undefined' && POPULAR_IDS['sec-favorites']) || [];
      items = ALL.filter(p => favIds.includes(p.no) && matchFilter(p));
    } else {
      items = ALL.filter(p => (p.sections || [p.sec || 'misc']).includes(sec.id) && matchFilter(p));
    }

    if (items.length === 0) return;

    html += `
      <div class="sec-group-title" style="grid-column: 1 / -1; margin-top: 30px; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; color: var(--gold); border-bottom: 1px solid rgba(200,160,80,0.2); padding-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
        <span>${sec.title}</span>
        <span style="font-size: 11px; opacity: 0.5;">${items.length} Products</span>
      </div>`;

    html += (items || []).map((p, idx) => `
      <div class="prod-item" style="--i: ${idx}; position: relative;">
        <div class="prod-checkbox-wrap" style="position: absolute; top: 12px; right: 12px; z-index: 10; background: rgba(0,0,0,0.4); border-radius: 6px; padding: 4px; display: flex;" onclick="event.stopPropagation()">
          <input type="checkbox" class="prod-checkbox" style="width: 16px; height: 16px; cursor: pointer; accent-color: var(--gold);" value="${p.no}" id="chk_${p.no}" onchange="handleProdSelect()" ${selectedProductsToMerge.has(p.no) ? 'checked' : ''}>
        </div>
        <div class="p-ico">
          ${p.image ? `<img src="${p.image}" onerror="handleImgErr(this)" style="width:100%; height:100%; object-fit:cover; border-radius:6px;">` : getEmoji(p.tags || [], p.g)}
        </div>
        <div class="p-info">
          <div class="p-name">${p.name || 'Unknown'} <span class="p-id-pill">#${p.no || '??'}</span></div>
          <div class="p-brand">${p.brand || 'Exclusive'}</div>
          <div class="p-price">${p.price === 'N/A' ? 'Request' : (p.price || '0') + ' Br'}</div>
          <div class="p-secs-row">
            ${(p.sections || [p.sec || 'misc']).map(s => `<span class="p-sec-tag">${String(s).replace('sec-', '')}</span>`).join('')}
          </div>
        </div>
        <div class="p-actions">
          <button class="qa-btn" onclick="openProductModal(${p.no})" title="Edit Details">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
          </button>
        </div>
      </div>
    `).join('');
  });

  grid.innerHTML = html || '<div style="padding:80px; text-align:center; color:rgba(255,255,255,0.2); grid-column: 1 / -1;">No products found matching the Store catalogue.</div>';
}

// Triggers a product re-render when the search box input changes.
function handleProdSearch() {
  renderProducts();
}

// ── PRODUCT EDIT MODAL ────────────────────────────────
// Opens the product edit/add modal and pre-fills all fields from the product data.
// When called with no argument, it opens as a blank 'Add New Product' form.
function openProductModal(no) {
  const isNew = typeof no === 'undefined' || no === null;
  const p = isNew ? null : ALL.find(x => x.no === no);

  if (!isNew && !p) return;

  document.getElementById('prodModalTitle').textContent = isNew ? 'Add New Product' : 'Edit Product';
  document.getElementById('prodNo').value = isNew ? '' : p.no;
  document.getElementById('prodBrand').value = isNew ? '' : p.brand;
  document.getElementById('prodName').value = isNew ? '' : p.name;
  document.getElementById('prodPrice').value = isNew ? '' : p.price;

  // Set primary section
  document.getElementById('prodSec').value = isNew ? 'sec-unisex' : (p.sections ? p.sections[0] : p.sec);

  document.getElementById('prodSize').value = isNew ? '100ml' : p.size;
  document.getElementById('prodGender').value = isNew ? 'u' : p.g;
  document.getElementById('prodOrig').value = isNew ? 'false' : (p.orig ? 'true' : 'false');
  document.getElementById('prodImg').value = isNew ? '' : (p.image || '');
  document.getElementById('prodTags').value = isNew ? 'misc' : (p.tags || []).join(', ');
  document.getElementById('prodVibe').value = isNew ? '' : (p.vibe || '');

  document.getElementById('prodModalBackdrop').classList.add('open');
  document.getElementById('prodModal').classList.add('open');

  // Render Image Gallery for selection
  const gallery = document.getElementById('prodGallery');
  const galleryRow = document.getElementById('prodGalleryRow');
  
  if (isNew || !p.images || p.images.length <= 1) {
    galleryRow.style.display = 'none';
  } else {
    galleryRow.style.display = 'block';
    gallery.innerHTML = p.images.map(imgUrl => `
      <div class="gallery-item ${imgUrl === p.image ? 'active' : ''}" onclick="setAsDefaultPhoto('${imgUrl}', this)">
        <img src="${imgUrl}" onerror="handleImgErr(this)">
        <div class="set-default-hint">${imgUrl === p.image ? 'CURRENT DEFAULT' : 'SET AS DEFAULT'}</div>
      </div>
    `).join('');
  }
  
  // Handle delete button visibility
  const delBtn = document.getElementById('modalDelBtn');
  if (isNew) {
    delBtn.style.display = 'none';
  } else {
    delBtn.style.display = 'flex';
    delBtn.title = p.deleted ? 'Restore Product' : 'Delete Product';
    delBtn.innerHTML = p.deleted 
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>';
  }
}

function closeProductModal() {
  document.getElementById('prodModalBackdrop').classList.remove('open');
  document.getElementById('prodModal').classList.remove('open');
}

async function saveProduct() {
  if (!db || firebaseConfig.apiKey === "YOUR_API_KEY") {
    alert("Firebase database not initialized! Cannot save.");
    return;
  }

  const btn = document.querySelector('#prodModal .btn-primary');
  btn.textContent = 'Saving...';
  btn.disabled = true;

  try {
    let noStr = document.getElementById('prodNo').value;
    let no;

    if (!noStr) {
      // Find a new ID. Max existing ID + 1.
      const currentMax = ALL.reduce((max, item) => Math.max(max, item.no), 0);
      no = currentMax + 1;
    } else {
      no = parseInt(noStr, 10);
    }

    const data = {
      no: no,
      brand: document.getElementById('prodBrand').value.trim(),
      name: document.getElementById('prodName').value.trim(),
      price: document.getElementById('prodPrice').value.trim(),
      sections: [document.getElementById('prodSec').value], // Simplified for admin edit
      size: document.getElementById('prodSize').value.trim(),
      g: document.getElementById('prodGender').value,
      orig: document.getElementById('prodOrig').value === 'true',
      image: document.getElementById('prodImg').value.trim(),
      tags: document.getElementById('prodTags').value.split(',').map(s => s.trim()).filter(s => s),
      vibe: document.getElementById('prodVibe').value.trim()
    };

    // Save to Firestore
    await db.collection("products").doc(String(no)).set(data);

    // Update local memory
    const existingIdx = ALL.findIndex(p => p.no === no);
    if (existingIdx >= 0) {
      ALL[existingIdx] = { ...ALL[existingIdx], ...data };
    } else {
      ALL.push(data);
    }

    renderProducts();
    closeProductModal();
    showToast(`Product ${no} saved successfully`);

  } catch (e) {
    console.error("Error saving product:", e);
    alert("Failed to save product: " + e.message);
  } finally {
    btn.textContent = 'Save Product Details';
    btn.disabled = false;
  }
}

// Soft-deletes (trash) or restores a product directly from the product edit modal.
// The trash button changes to a restore icon when the product is already deleted.
async function removeProductFromModal() {
  const no = parseInt(document.getElementById('prodNo').value);
  if (isNaN(no)) return;
  const p = ALL.find(x => x.no === no);
  if (!p) return;

  const isRestoring = !!p.deleted;
  const msg = isRestoring ? `Restore Product #${no}?` : `Move Product #${no} to Trash?`;
  if (!confirm(msg)) return;

  try {
    const newVal = isRestoring ? false : true;
    await db.collection("products").doc(String(no)).update({ deleted: newVal });

    // Update local memory
    p.deleted = newVal;

    renderProducts();
    closeProductModal();
    showToast(isRestoring ? 'Product restored' : 'Product moved to Trash');
  } catch (e) {
    alert("Operation failed: " + e.message);
  }
}

// Permanently purges all products currently in the Trash (Deleted sub-tab).
// Only available in the Deleted tab — this action cannot be undone.
async function clearCurrentProductTab() {
  if (activeProductTab !== 'Deleted') {
    alert("Purging is only available in the Trash tab.");
    return;
  }
  const trashItems = ALL.filter(p => p.deleted);
  if (!trashItems.length) return;

  if (!confirm(`Permanently delete all ${trashItems.length} products in Trash? This cannot be undone.`)) return;

  const batch = db.batch();
  trashItems.forEach(p => {
    batch.delete(db.collection("products").doc(String(p.no)));
  });

  try {
    await batch.commit();
    // Local remove
    trashItems.forEach(p => {
      const idx = ALL.findIndex(x => x.no === p.no);
      if (idx >= 0) ALL.splice(idx, 1);
    });
    renderProducts();
    showToast("Trash purged successfully");
  } catch (e) {
    alert("Purge failed: " + e.message);
  }
}

// ── FALLBACK EMOJI HELPER ─────────────────────────────
// Returns a generic bottle SVG when a product has no photo image set.
// Used only in the admin product grid as a placeholder thumbnail.
function getEmoji(tags, gender) {
  // Return generic SVG instead of emoji
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.5;"><path d="M7 7.5c0-2 1.5-4 4.5-4s4.5 2 4.5 4v2c2 1 3 3 3 5v3c0 1.5-1 3-3 3H8c-2 0-3-1.5-3-3v-3c0-2 1-4 3-5v-2z"></path><line x1="12" y1="3.5" x2="12" y2="1.5"></line><line x1="10" y1="1.5" x2="14" y2="1.5"></line></svg>`;
}

// ── BULK PRODUCT SELECTION & ACTIONS ──────────────────────
// Clears all selected checkboxes at once using the Deselect topbar button.
// Resets the Set and unchecks every visible checkbox in the product grid.
function uncheckAllProducts() {
  selectedProductsToMerge.clear();
  document.querySelectorAll('.prod-checkbox').forEach(cb => cb.checked = false);
  handleProdSelect();
}

// Called whenever a product checkbox changes state. Re-reads all checked boxes.
// Shows/hides the Deselect, Remove Selected, and Merge Selected topbar buttons accordingly.
function handleProdSelect() {
  const checkboxes = document.querySelectorAll('.prod-checkbox');
  selectedProductsToMerge.clear();
  checkboxes.forEach(cb => {
    if (cb.checked) selectedProductsToMerge.add(parseInt(cb.value));
  });
  
  const mergeBtn = document.getElementById('btnMergeSelected');
  const delBtn = document.getElementById('btnDeleteSelected');
  const uncheckBtn = document.getElementById('btnUncheck');
  
  if (selectedProductsToMerge.size > 0) {
    if (delBtn) delBtn.style.display = 'flex';
    if (uncheckBtn) uncheckBtn.style.display = 'flex';
    if (selectedProductsToMerge.size > 1) {
      if (mergeBtn) mergeBtn.style.display = 'flex';
    } else {
      if (mergeBtn) mergeBtn.style.display = 'none';
    }
  } else {
    if (delBtn) delBtn.style.display = 'none';
    if (mergeBtn) mergeBtn.style.display = 'none';
    if (uncheckBtn) uncheckBtn.style.display = 'none';
  }
}

// Soft-deletes (moves to Trash) all currently selected products as a batch.
// Updates Firestore and local memory in one batch write, then clears the selection.
async function deleteSelectedProducts() {
  if (selectedProductsToMerge.size === 0) return;
  const count = selectedProductsToMerge.size;
  if (!confirm(`Move ${count} selected products to Trash?`)) return;

  const batch = db.batch();
  selectedProductsToMerge.forEach(no => {
    batch.update(db.collection("products").doc(String(no)), { deleted: true });
    // Local Update
    const p = ALL.find(x => x.no === no);
    if (p) p.deleted = true;
  });

  try {
    await batch.commit();
    showToast(`${count} products moved to Trash`);
    selectedProductsToMerge.clear();
    handleProdSelect();
    renderProducts();
  } catch (e) {
    alert("Delete failed: " + e.message);
  }
}

function openMergeModal() {
  if (selectedProductsToMerge.size < 2) return;
  
  const select = document.getElementById('mergePrimarySelect');
  select.innerHTML = '';
  
  selectedProductsToMerge.forEach(no => {
    const p = ALL.find(x => x.no === no);
    if (p) {
      select.innerHTML += `<option value="${p.no}" style="background: #140a0f;">${p.brand || ''} ${p.name} (#${p.no}) - ${formatPrice(p.price || 0)}</option>`;
    }
  });
  
  document.getElementById('mergeCount').textContent = selectedProductsToMerge.size;
  document.getElementById('mergeModalBackdrop').classList.add('open');
  document.getElementById('mergeModal').classList.add('open');
}

function closeMergeModal() {
  document.getElementById('mergeModalBackdrop').classList.remove('open');
  document.getElementById('mergeModal').classList.remove('open');
}

async function executeMerge() {
  if (!db || firebaseConfig.apiKey === "YOUR_API_KEY") {
    alert("Firebase database not initialized! Cannot save.");
    return;
  }
  
  const primaryNoStr = document.getElementById('mergePrimarySelect').value;
  if (!primaryNoStr) return;
  
  const primaryNo = parseInt(primaryNoStr);
  const others = Array.from(selectedProductsToMerge).filter(n => n !== primaryNo);
  
  const pObj = ALL.find(x => x.no === primaryNo);
  if (!pObj) return;
  
  const btn = document.getElementById('btnConfirmMerge');
  btn.textContent = 'Merging Data...';
  btn.disabled = true;
  
  if (!pObj.images) pObj.images = pObj.image ? [pObj.image] : [];
  if (!pObj.sections) pObj.sections = [pObj.sec || 'sec-misc'];
  if (!pObj.tags) pObj.tags = [];
  
  const batch = db.batch();
  
  try {
    for (let oNo of others) {
       let oObj = ALL.find(x => x.no === oNo);
       if (!oObj) continue;
       
       // merge images
       let oImgs = oObj.images || (oObj.image ? [oObj.image] : []);
       oImgs.forEach(img => {
           if (!pObj.images.includes(img) && img.trim()) pObj.images.push(img.trim());
       });
       if (!pObj.image && oObj.image) pObj.image = oObj.image;
       
       // merge sections
       let oSecs = oObj.sections || (oObj.sec ? [oObj.sec] : []);
       oSecs.forEach(sec => {
           if (!pObj.sections.includes(sec)) pObj.sections.push(sec);
       });
       
       // merge tags
       let oTags = oObj.tags || [];
       oTags.forEach(tag => {
           if (!pObj.tags.includes(tag)) pObj.tags.push(tag);
       });
       
       // move other to trash
       oObj.deleted = true;
       batch.set(db.collection("products").doc(String(oNo)), { deleted: true }, { merge: true });
    }
    
    // update primary
    batch.set(db.collection("products").doc(String(primaryNo)), { 
      images: pObj.images,
      image: pObj.image || '',
      sections: pObj.sections,
      tags: pObj.tags
    }, { merge: true });
    
    await batch.commit();
    showToast("Successfully merged perfumes");
    
    selectedProductsToMerge.clear();
    const mergeBtn = document.getElementById('btnMergeSelected');
    if (mergeBtn) mergeBtn.style.display = 'none';
    
    closeMergeModal();
    renderProducts();
  } catch (e) {
    alert("Merge failed: " + e.message);
  } finally {
    btn.textContent = 'Confirm & Merge Data';
    btn.disabled = false;
  }
}

// ── GOD MODE TOOLS ──────────────────────────────────────────────
function runCalc() {
  const cost = parseFloat(document.getElementById('calcCost').value) || 0;
  const sale = parseFloat(document.getElementById('calcSale').value) || 0;

  const profit = sale - cost;
  const margin = sale !== 0 ? (profit / sale) * 100 : 0;

  document.getElementById('resProfit').textContent = formatPrice(profit);
  document.getElementById('resMargin').textContent = margin.toFixed(1) + '%';

  if (margin < 15) document.getElementById('resMargin').style.color = '#e68e9e';
  else if (margin > 35) document.getElementById('resMargin').style.color = '#8fd19e';
  else document.getElementById('resMargin').style.color = '#c8a050';
}

function setAsDefaultPhoto(url, el) {
  // Update the input field
  document.getElementById('prodImg').value = url;
  
  // Update UI active state
  document.querySelectorAll('.gallery-item').forEach(item => item.classList.remove('active'));
  el.classList.add('active');
  
  // Update the hints
  document.querySelectorAll('.gallery-item .set-default-hint').forEach(h => h.textContent = 'SET AS DEFAULT');
  el.querySelector('.set-default-hint').textContent = 'CURRENT DEFAULT';

  showToast('Default photo selected (Save to apply)');
}

function saveNotes() {
  const val = document.getElementById('adminNotes').value;
  localStorage.setItem('dagu_admin_notes', val);
}

function loadSavedNotes() {
  const val = localStorage.getItem('dagu_admin_notes');
  if (val) document.getElementById('adminNotes').value = val;
}
