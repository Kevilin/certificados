// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-ftlurTyS77Vwdd2pHJws9q__3ygadGY",
  authDomain: "certificados-723c6.firebaseapp.com",
  projectId: "certificados-723c6",
  storageBucket: "certificados-723c6.appspot.com",
  messagingSenderId: "131904177894",
  appId: "1:131904177894:web:597e0693a835edf08a1d27"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
