import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const prod = {
  apiKey: "AIzaSyCCJDkXzH5g2_t9ORhA8itKkL-n5GPPOpc",
  authDomain: "dbs-auto-b8d0f.firebaseapp.com",
  projectId: "dbs-auto-b8d0f",
  storageBucket: "dbs-auto-b8d0f.appspot.com",
  messagingSenderId: "509147101084",
  appId: "1:509147101084:web:7eaa82db921df1cdd7fa59",
  measurementId: "G-8X1H5BJJF0",
};
const dev = {
  apiKey: "AIzaSyCauncTOSvQBd--uwKZ6BYIlfDZS2Euegw",
  authDomain: "dbs-demo-36c23.firebaseapp.com",
  projectId: "dbs-demo-36c23",
  storageBucket: "dbs-demo-36c23.appspot.com",
  messagingSenderId: "1004195093305",
  appId: "1:1004195093305:web:068bfcb54b48f68e0f66e8",
};

const actualConfig = dev;

//prod config
const firebaseConfig = initializeApp(actualConfig);

export const analytics = getAnalytics();
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
export default firebaseConfig;
