// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "template-914ab.firebaseapp.com",
  projectId: "template-914ab",
  storageBucket: "template-914ab.appspot.com",
  messagingSenderId: "81505731903",
  appId: "1:81505731903:web:1869517b2c5ac534323f8a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);