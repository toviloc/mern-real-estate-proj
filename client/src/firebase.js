// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-loc.firebaseapp.com",
  projectId: "real-estate-loc",
  storageBucket: "real-estate-loc.appspot.com",
  messagingSenderId: "939835350252",
  appId: "1:939835350252:web:37a8c427e8ed7ead7a19c9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
