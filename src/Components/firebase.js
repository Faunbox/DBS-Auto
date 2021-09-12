import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

//prod config
// const firebaseConfig = firebase.initializeApp({
//   apiKey: "AIzaSyCCJDkXzH5g2_t9ORhA8itKkL-n5GPPOpc",
//   authDomain: "dbs-auto-b8d0f.firebaseapp.com",
//   projectId: "dbs-auto-b8d0f",
//   storageBucket: "dbs-auto-b8d0f.appspot.com",
//   messagingSenderId: "509147101084",
//   appId: "1:509147101084:web:7eaa82db921df1cdd7fa59",
//   measurementId: "G-8X1H5BJJF0",
// });


//dev config
const firebaseConfigDev = firebase.initializeApp({
  apiKey: "AIzaSyCauncTOSvQBd--uwKZ6BYIlfDZS2Euegw",
  authDomain: "dbs-demo-36c23.firebaseapp.com",
  projectId: "dbs-demo-36c23",
  storageBucket: "dbs-demo-36c23.appspot.com",
  messagingSenderId: "1004195093305",
  appId: "1:1004195093305:web:068bfcb54b48f68e0f66e8",
});

firebase.analytics();
export const db = firebaseConfigDev.firestore();
export const auth = firebaseConfigDev.auth();
export const storage = firebaseConfigDev.storage();
export default firebaseConfigDev;
