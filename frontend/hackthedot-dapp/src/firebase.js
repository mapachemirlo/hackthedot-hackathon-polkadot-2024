// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

const firebaseConfig = {
    apiKey: "AIzaSyBJv0Wn0YDQ8oerB9G80IelhY8r1gtqvlQ",
    authDomain: "hackthedot-test.firebaseapp.com",
    projectId: "hackthedot-test",
    storageBucket: "hackthedot-test.appspot.com",
    messagingSenderId: "836364621788",
    appId: "1:836364621788:web:1847c38df1b6fd90da2119",
    measurementId: "G-ST35PWPQ5C"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 


