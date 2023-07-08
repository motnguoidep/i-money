import firebase from "./firebase";
import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDObMdYN8IisIqQ-rQbYKBt_j_cSTZNBls",
  authDomain: "project2-c2f73.firebaseapp.com",
  databaseURL: "https://project2-c2f73-default-rtdb.firebaseio.com",
  projectId: "project2-c2f73",
  storageBucket: "project2-c2f73.appspot.com",
  messagingSenderId: "771212238389",
  appId: "1:771212238389:web:fac5f4a06cdea067975b7c",
  measurementId: "G-NSPF922SCR",
};
firebase?.initializeApp(firebaseConfig);
const projectAuth = firebase?.auth();
const projectFirestore = firebase?.firestore();
const timestamp = firebase?.firestore?.FieldValue?.serverTimestamp;
export { projectAuth, projectFirestore, timestamp };
