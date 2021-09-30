// import { initializeApp } from 'firebase/app';
// import { getFirestore, getDoc,  collection, addDoc, doc, getDocs } from 'firebase/firestore';

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCRGkZe35C2OefUJUp9NWbnI47UJmu9cg0",
  authDomain: "pun-chat.firebaseapp.com",
  projectId: "pun-chat",
  storageBucket: "pun-chat.appspot.com",
  messagingSenderId: "319862018819",
  appId: "1:319862018819:web:82108952646cb5c8314f36",
  measurementId: "G-C85HVG8XL0",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

// export {db, collection, addDoc, doc, getDocs, getDoc};
