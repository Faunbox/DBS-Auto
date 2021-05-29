import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCCJDkXzH5g2_t9ORhA8itKkL-n5GPPOpc",
  authDomain: "dbs-auto-b8d0f.firebaseapp.com",
  projectId: "dbs-auto-b8d0f",
  storageBucket: "dbs-auto-b8d0f.appspot.com",
  messagingSenderId: "509147101084",
  appId: "1:509147101084:web:7eaa82db921df1cdd7fa59",
  measurementId: "G-8X1H5BJJF0",
});

firebase.analytics();
export const db = firebaseConfig.firestore();
export default firebaseConfig;
export const storage = firebaseConfig.storage();
