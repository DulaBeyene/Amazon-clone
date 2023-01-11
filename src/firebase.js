import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm-B8Xny4kvOcOmW0tTdtkt6XIXNohTJI",
  authDomain: "clone-f4474.firebaseapp.com",
  projectId: "clone-f4474",
  storageBucket: "clone-f4474.appspot.com",
  messagingSenderId: "538093438700",
  appId: "1:538093438700:web:454d498364d79bbba8c7c9",
  measurementId: "G-L5816F31WN",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

// The latest update for auth with db
 const auth = firebase.auth();
export { auth, db};


