// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Don't forget to import getDatabase as well.

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
const auth = getAuth(app); // Update the auth export here

export { app, database, auth }; // Export the necessary objects
