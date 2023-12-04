// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2qqZLHsYaoTkK5huRdHqTDlyDczGf3Xg",
  authDomain: "netflixgpt-6d13e.firebaseapp.com",
  projectId: "netflixgpt-6d13e",
  storageBucket: "netflixgpt-6d13e.appspot.com",
  messagingSenderId: "930096250715",
  appId: "1:930096250715:web:3302a7a047dbcf18f3247e",
  measurementId: "G-GVW0CJNR6M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
