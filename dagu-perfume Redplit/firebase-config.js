// ════════════════════════════════════════════
//  SHARED FIREBASE CONFIGURATION
// ════════════════════════════════════════════
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQiOj2yHgCEEEoUyfp7zhjpOb6sGui_4w",
  authDomain: "dagu-perfume-609a1.firebaseapp.com",
  projectId: "dagu-perfume-609a1",
  storageBucket: "dagu-perfume-609a1.firebasestorage.app",
  messagingSenderId: "861430293902",
  appId: "1:861430293902:web:8c9414ddbc270307d3f0df",
  measurementId: "G-FFC7SH49ZW"
};

let db = null;
try {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
} catch (e) {
  console.warn("Firebase not initialized. Please ensure the config is updated.", e);
}


