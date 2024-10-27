// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "notion-clone-961b7.firebaseapp.com",
    projectId: "notion-clone-961b7",
    storageBucket: "notion-clone-961b7.appspot.com",
    messagingSenderId: "899597722895",
    appId: "1:899597722895:web:19ea9462376d5159ed4a7a"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };