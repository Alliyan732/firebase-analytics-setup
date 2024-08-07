// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "add your keys here",
  authDomain: "add your keys here",
  projectId: "add your keys here",
  storageBucket: "add your keys here",
  messagingSenderId: "add your keys here",
  appId: "add your keys here",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics, logEvent };
