// ════════════════════════════════════════════
//  ADMIN LOGIC
// ════════════════════════════════════════════

// We rely on the `db` variable initialized in firebase-config.js.

let allOrders = [];
let unsubscribe = null;
let currentOrderDetails = null;

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

function getStatusBadge(status) {
  const s = (status || 'Pending').toLowerCase();
  return `<span class="badge ${s}">${s}</span>`;
}

// ── LOADING DATA ───────────────────────────────────────────────
function loadOrders() {
  const tbody = document.getElementById('ordersTableBody');
  tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 30px;">Loading orders...</td></tr>';
  
  if (!db || typeof db.collection !== 'function') {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 30px; color: #e68e9e;">Firebase is not configured correctly. Check firebase-config.js.</td></tr>';
    return;
  }

  // Real-time listener
  if (unsubscribe) unsubscribe();
  
  unsubscribe = db.collection("orders").orderBy("timestamp", "desc").onSnapshot(snapshot => {
    allOrders = [];
    let pendingCount = 0;
    let completedCount = 0;
    let revenue = 0;

    snapshot.forEach(doc => {
      const data = doc.data();
      data.id = doc.id;
      // Derived properties
      if(!data.status) data.status = 'Pending';
      const refId = 'DGU-' + data.id.slice(-6).toUpperCase();
      data.refId = refId;
      
      allOrders.push(data);
      
      if (data.status.toLowerCase() === 'pending') pendingCount++;
      if (data.status.toLowerCase() === 'completed') completedCount++;
      if (data.status.toLowerCase() === 'completed' || data.status.toLowerCase() === 'confirmed') revenue += Number(data.totalAmount || 0);
    });

    // Update Stats
    document.getElementById('statTotal').textContent = allOrders.length;
    document.getElementById('statPending').textContent = pendingCount;
    document.getElementById('statCompleted').textContent = completedCount;
    document.getElementById('statRevenue').textContent = formatPrice(revenue);

    renderTable();
  }, error => {
    console.error("Error fetching orders:", error);
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 30px; color: #e68e9e;">Error fetching orders: ${error.message}</td></tr>`;
  });
}

function renderTable() {
  const tbody = document.getElementById('ordersTableBody');
  if (allOrders.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 30px;">No orders found yet.</td></tr>';
    return;
  }

  tbody.innerHTML = allOrders.map(o => `
    <tr>
      <td style="font-weight: 500; color: #c8a050;">${o.refId}</td>
      <td style="color: rgba(245,237,224,0.6);">${formatDate(o.timestamp)}</td>
      <td>
        <div style="font-weight: 500;">${o.customerName || 'Unknown'}</div>
        <div style="font-size: 11px; color: rgba(245,237,224,0.5);">${o.customerPhone || 'N/A'}</div>
      </td>
      <td style="font-weight: 500;">${formatPrice(o.totalAmount || 0)}</td>
      <td>${getStatusBadge(o.status)}</td>
      <td>
        <button class="btn-view" onclick="viewOrder('${o.id}')">View Details</button>
      </td>
    </tr>
  `).join('');
}

// ── MODAL ACTIONS ──────────────────────────────────────────────
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
  
  const select = document.getElementById('modalStatusSelect');
  select.value = order.status;
  
  // Render Items
  const itemsList = document.getElementById('modalItemsList');
  if (order.items && order.items.length > 0) {
    itemsList.innerHTML = order.items.map(i => `
      <div class="order-item-row">
        <div class="order-item-main">
          <div class="o-name">${i.brand} ${i.name}</div>
          <div class="o-meta">Size: ${i.size || 'N/A'} | Qty: ${i.qty}</div>
        </div>
        <div class="o-price">${formatPrice((i.price || 0) * (i.qty || 1))}</div>
      </div>
    `).join('');
  } else {
    itemsList.innerHTML = '<div style="color: rgba(255,255,255,0.5); font-size: 13px;">No items recorded.</div>';
  }

  document.getElementById('modalTotal').textContent = `Total: ${formatPrice(order.totalAmount || 0)}`;

  document.getElementById('orderModalBackdrop').classList.add('open');
  document.getElementById('orderModal').classList.add('open');
}

function closeOrderModal() {
  document.getElementById('orderModalBackdrop').classList.remove('open');
  document.getElementById('orderModal').classList.remove('open');
  currentOrderDetails = null;
}

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

// Auto-load orders on page start
window.onload = () => {
  loadOrders();
};
