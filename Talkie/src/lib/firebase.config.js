import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "talkie-5ca9f.firebaseapp.com",
  projectId: "talkie-5ca9f",
  storageBucket: "talkie-5ca9f.firebasestorage.app",
  messagingSenderId: "1060456017364",
  appId: "1:1060456017364:web:8874c6677926a2b808fa41",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);