// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNJCgxVqxQ3Mv8lI4Pz9Z43remJDFh1VI",
  authDomain: "forty-9bc4f.firebaseapp.com",
  projectId: "forty-9bc4f",
  storageBucket: "forty-9bc4f.appspot.com",
  messagingSenderId: "629727700058",
  appId: "1:629727700058:web:7ff3690d31e0706ffbe463"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);