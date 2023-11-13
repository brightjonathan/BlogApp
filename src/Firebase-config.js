import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD2O7rfWfbhWjKnnsQ63c6Ccio_ChZ3rYY",
  authDomain: "hovorblog-fa0c7.firebaseapp.com",
  projectId: "hovorblog-fa0c7",
  storageBucket: "hovorblog-fa0c7.appspot.com",
  messagingSenderId: "20964592958",
  appId: "1:20964592958:web:5655b90f54c80c5ca8f06f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app); // for storing data into firestore
export default app;