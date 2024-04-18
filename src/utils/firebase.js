// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-180a0.firebaseapp.com",
  projectId: "blog-180a0",
  storageBucket: "blog-180a0.appspot.com",
  messagingSenderId: "169978489700",
  appId: "1:169978489700:web:236d3c7ca8759c0c556871",
  measurementId: "G-57HTX2RNHS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
