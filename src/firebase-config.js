// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics, GoogleAuthProvider} from "firebase/analytics";
import {getAuth, } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQFJgnh0id15U_RaxPzY_afh5CF3OQzVA",
  authDomain: "task-master-24f01.firebaseapp.com",
  projectId: "task-master-24f01",
  storageBucket: "task-master-24f01.appspot.com",
  messagingSenderId: "831611708382",
  appId: "1:831611708382:web:205850c5ffd744deab734f",
  measurementId: "G-YYN1W21VTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()