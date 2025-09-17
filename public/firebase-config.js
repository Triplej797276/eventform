// Import SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyApw_WneyDTByuPSj0OuFAtIuY6vqci9LM",
  authDomain: "mhkcerp-1a913.firebaseapp.com",
  projectId: "mhkcerp-1a913",
  storageBucket: "mhkcerp-1a913.firebasestorage.app",
  messagingSenderId: "444610489913",
  appId: "1:444610489913:web:6f3d406580a776a93be7e8",
  measurementId: "G-N5W4SJVZKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
