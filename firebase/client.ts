// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOZINGVTd811QBfURslJxkyS-4UxwV484",
  authDomain: "prepwise-b1b89.firebaseapp.com",
  projectId: "prepwise-b1b89",
  storageBucket: "prepwise-b1b89.firebasestorage.app",
  messagingSenderId: "470172007506",
  appId: "1:470172007506:web:85e8e5548b23d043f6f38b",
  measurementId: "G-L0QXHMPHPF"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp();

export const auth=getAuth(app);
export const db=getFirestore(app)

 