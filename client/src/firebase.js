// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEYS,
  authDomain: "codelika-d03e4.firebaseapp.com",
  projectId: "codelika-d03e4",
  storageBucket: "codelika-d03e4.appspot.com",
  messagingSenderId: "629104987460",
  appId: "1:629104987460:web:4abb6d1831c2bebb9edb11",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
