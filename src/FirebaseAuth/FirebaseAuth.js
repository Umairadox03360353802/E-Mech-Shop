// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBl4iu9eWV3d_oE5v0Uy75SpagDe2LvcOE",
    authDomain: "mech-shop-dd50e.firebaseapp.com",
    projectId: "mech-shop-dd50e",
    storageBucket: "mech-shop-dd50e.appspot.com",
    messagingSenderId: "301089818681",
    appId: "1:301089818681:web:8f7e28508022be8ffb65e8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth = getAuth();
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export{app,auth,db}