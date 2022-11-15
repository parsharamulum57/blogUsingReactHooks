import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAmjxhveuaxKrW4C5MaXSX1u9HhcgRKY1I",
    authDomain: "blogusingreacthooks.firebaseapp.com",
    projectId: "blogusingreacthooks",
    storageBucket: "blogusingreacthooks.appspot.com",
    messagingSenderId: "354422634404",
    appId: "1:354422634404:web:269fb100df85e56c393331"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);