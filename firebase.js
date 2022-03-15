// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb8m-tnXMaLX_i6C0pxqtLM1KiHEj7AU4",
  authDomain: "news-web-fd574.firebaseapp.com",
  projectId: "news-web-fd574",
  storageBucket: "news-web-fd574.appspot.com",
  messagingSenderId: "64194672064",
  appId: "1:64194672064:web:30347626145092cc118425",
  measurementId: "G-HFJP92C7D6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);