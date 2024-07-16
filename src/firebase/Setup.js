import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAjtcNevmB8wyooKEh4WFrxpazElo4QaSc",
  authDomain: "newser-13cc6.firebaseapp.com",
  projectId: "newser-13cc6",
  storageBucket: "newser-13cc6.appspot.com",
  messagingSenderId: "517841410505",
  appId: "1:517841410505:web:6efd38735d13cfafc87018",
  measurementId: "G-SQNBMNZQB5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)