import firebase from "./firebase";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBAkpzG-_ULYHYH8puN1RgrcMR1Ei_tNME",
  authDomain: "imoney-542fd.firebaseapp.com",
  projectId: "imoney-542fd",
  storageBucket: "imoney-542fd.appspot.com",
  messagingSender: "114742291120",
  appId: "1:114742291120:web:fb3f34a48fb1e6b22b6975",
  measurementId: "G-EMF1W4LESN",
};
firebase?.initializeApp(firebaseConfig);
const projectAuth = firebase?.auth();
const projectFirestore = firebase?.firestore();

const timestamp = firebase?.firestore?.FieldValue?.serverTimestamp;
export { projectAuth, projectFirestore, timestamp };
