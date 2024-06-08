// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "astute-homes.firebaseapp.com",
  projectId: "astute-homes",
  storageBucket: "astute-homes.appspot.com",
  messagingSenderId: "1033894770041",
  appId: "1:1033894770041:web:1cd25f15b3519841a0eba8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
