// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ3mcUq4rw_InJW0iJ2AU4s2TcbkfPPTw",
  authDomain: "todolist-b208d.firebaseapp.com",
  projectId: "todolist-b208d",
  storageBucket: "todolist-b208d.appspot.com",
  messagingSenderId: "979808942427",
  appId: "1:979808942427:web:8d214389f2efb9096f027e",
  measurementId: "G-KGC7Y4Z9H9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);