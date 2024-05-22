// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-1fbf6.firebaseapp.com",
  projectId: "mern-blog-1fbf6",
  storageBucket: "mern-blog-1fbf6.appspot.com",
  messagingSenderId: "754368063453",
  appId: "1:754368063453:web:f661eafe2f21d1af41b834"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
