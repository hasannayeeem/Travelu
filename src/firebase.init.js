// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNApMdYFBOFGiy_YRtxhUmhgH_UI74EQc",
  authDomain: "simple-firebase-test-1f645.firebaseapp.com",
  projectId: "simple-firebase-test-1f645",
  storageBucket: "simple-firebase-test-1f645.appspot.com",
  messagingSenderId: "204721485874",
  appId: "1:204721485874:web:7db3d274582ba2ac01242b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;