/**
 * NexStore - Official Firebase Initialization Module
 * 
 * This file initializes Firebase and exports the core instances (app, analytics, db)
 * to be used across all NexStore HTML pages.
 * 
 * Using Firebase Web Modular SDK via CDN for Vanilla JS integration.
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase configuration provided from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAHZ4hwTvvT-sG8prfVr68mh_72s08yuTU",
  authDomain: "nexstore-i.firebaseapp.com",
  projectId: "nexstore-i",
  storageBucket: "nexstore-i.firebasestorage.app",
  messagingSenderId: "751873365964",
  appId: "1:751873365964:web:6673aaedf018dc0b62ef69",
  measurementId: "G-T6TRWWGDCH"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics (conditionally to prevent errors in environments where it's blocked)
let analytics;
try {
  analytics = getAnalytics(app);
} catch (error) {
  console.warn("Firebase Analytics could not be initialized:", error);
}

// Initialize Firestore for App Data
const db = getFirestore(app);

// Export instances to be imported in individual HTML pages
export { app, analytics, db };