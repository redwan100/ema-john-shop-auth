// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMDr-zxtG0UHqB_KZG_U8WGIg7DDKmsYc",
  authDomain: "ema-john-auth-a3d8a.firebaseapp.com",
  projectId: "ema-john-auth-a3d8a",
  storageBucket: "ema-john-auth-a3d8a.appspot.com",
  messagingSenderId: "7794207724",
  appId: "1:7794207724:web:6acb5a9a8b8b428704eec9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;