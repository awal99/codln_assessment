
import firebase from "firebase";
import {FIREBASE_APP_ID,FIREBASE_API_KEY,FIREBASE_AUTHDOMAIN,FIREBASE_DATABASE,FIREBASE_PROJECTID,FIREBASE_STORAGE,FIREBASE_MESSAGING_ID} from "./secretes";

const firebaseConfig= {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTHDOMAIN,
  databaseURL: FIREBASE_DATABASE,
  projectId: FIREBASE_PROJECTID,
  storageBucket: FIREBASE_STORAGE,
  messagingSenderId: FIREBASE_MESSAGING_ID,
  appId: FIREBASE_APP_ID
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp;
  ///firebase config info removed for security reasons
