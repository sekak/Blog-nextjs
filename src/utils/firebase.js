// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 
 
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "template-914ab.firebaseapp.com",
  projectId: "template-914ab",
  storageBucket: "template-914ab.appspot.com",
  messagingSenderId: "81505731903",
  appId: "1:81505731903:web:1869517b2c5ac534323f8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
 