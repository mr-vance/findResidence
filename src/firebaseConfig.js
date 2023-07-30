// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp_-CvM1PnW_TxRfrvc1M6mG2Q25lolwQ",
  authDomain: "findres-app.firebaseapp.com",
  databaseURL: "https://findres-app-default-rtdb.firebaseio.com",
  projectId: "findres-app",
  storageBucket: "findres-app.appspot.com",
  messagingSenderId: "813392611006",
  appId: "1:813392611006:web:f031410d806c4c68f6c0ef",
  measurementId: "G-HDV4EN0L8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);