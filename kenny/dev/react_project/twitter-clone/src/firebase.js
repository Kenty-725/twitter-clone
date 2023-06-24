import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCl7fWdWnlSp2xoeMsiFleW438XQzFom4A",
  authDomain: "blog-f6c90.firebaseapp.com",
  projectId: "blog-f6c90",
  storageBucket: "blog-f6c90.appspot.com",
  messagingSenderId: "580756288488",
  appId: "1:580756288488:web:6f2f1f0cd74823e0b9aa5d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
