// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixgpt-f7ca4.firebaseapp.com",
  projectId: "netflixgpt-f7ca4",
  storageBucket: "netflixgpt-f7ca4.appspot.com",
  messagingSenderId: "993664911829",
  appId: "1:993664911829:web:fd78f5f03cb2e7988a155c",
  measurementId: "G-D9Z638TKXQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
