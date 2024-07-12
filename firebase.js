// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1vXyPYKrDFFIWrkiMKvuNy19m4PCrjTQ",
  authDomain: "react-note-f9446.firebaseapp.com",
  projectId: "react-note-f9446",
  storageBucket: "react-note-f9446.appspot.com",
  messagingSenderId: "315639826573",
  appId: "1:315639826573:web:c7b1e8dbf27eecc214bac4",
  measurementId: "G-Y8MFEHEY8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
