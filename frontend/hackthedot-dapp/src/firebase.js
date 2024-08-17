// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDTKibj_ZBbTRve2Lo8n2-voQ9pweM3JnU",
  authDomain: "hackthedot-cd0eb.firebaseapp.com",
  projectId: "hackthedot-cd0eb",
  storageBucket: "hackthedot-cd0eb.appspot.com",
  messagingSenderId: "574115486311",
  appId: "1:574115486311:web:921d3be57e7c71220452c2",
  measurementId: "G-CTZ03DNMWW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Export Firestore



// src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyDTKibj_ZBbTRve2Lo8n2-voQ9pweM3JnU",
//     authDomain: "hackthedot-cd0eb.firebaseapp.com",
//     projectId: "hackthedot-cd0eb",
//     storageBucket: "hackthedot-cd0eb.appspot.com",
//     messagingSenderId: "574115486311",
//     appId: "1:574115486311:web:921d3be57e7c71220452c2",
//     measurementId: "G-CTZ03DNMWW"
//   };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
