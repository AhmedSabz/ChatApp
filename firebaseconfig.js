// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUGNQHaN2z_IXtxQgqqafLPkWNB5S-9ew",
  authDomain: "chatapp-21145.firebaseapp.com",
  projectId: "chatapp-21145",
  storageBucket: "chatapp-21145.appspot.com",
  messagingSenderId: "472670140837",
  appId: "1:472670140837:web:a5db89d91b8896badb504c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db=getFirestore();
export { auth,db};