// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe9ZdV_dpEFD_Z8hbsjYpZjRuqyixTYBA",
  authDomain: "fir-auth-ddac5.firebaseapp.com",
  projectId: "fir-auth-ddac5",
  storageBucket: "fir-auth-ddac5.appspot.com",
  messagingSenderId: "695615864417",
  appId: "1:695615864417:web:88f04a9d5e0fa80179b420",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
