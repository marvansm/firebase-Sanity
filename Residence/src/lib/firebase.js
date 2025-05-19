
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtJHmG2D6rZoh3qfF_8TNbBNlVrkyQ6SI",
  authDomain: "login-4ff83.firebaseapp.com",
  projectId: "login-4ff83",
  storageBucket: "login-4ff83.firebasestorage.app",
  messagingSenderId: "747927772437",
  appId: "1:747927772437:web:9b6eea41b37c9781d31d1c",
  measurementId: "G-FDP5H3Q25Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Analytics = getAnalytics(app);

export const auth = getAuth(app);