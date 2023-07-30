// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


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
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and get the 'auth' object
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword};
