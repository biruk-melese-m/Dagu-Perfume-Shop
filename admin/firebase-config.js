// ════════════════════════════════════════════
//  SHARED FIREBASE CONFIGURATION
// ════════════════════════════════════════════
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU2llY_2OISq7dPf7-Cp_jvvwiYXGhQic",
  authDomain: "dagu-perfume-website.firebaseapp.com",
  projectId: "dagu-perfume-website",
  storageBucket: "dagu-perfume-website.firebasestorage.app",
  messagingSenderId: "91987779623",
  appId: "1:91987779623:web:dfcdbf77ecc64ccb662e02",
  measurementId: "G-B86NVXEK4B"
};

let db = null;
let analytics = null;
try {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
  analytics = firebase.analytics();
} catch (e) {
  console.warn("Firebase not initialized. Please ensure the config is updated.", e);
}


