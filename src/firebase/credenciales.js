import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyD8PqBgVkj9eADfjM0405kcyDT6bQNntR0",
  authDomain: "tiendaperfume-48a87.firebaseapp.com",
  projectId: "tiendaperfume-48a87",
  storageBucket: "tiendaperfume-48a87.appspot.com",
  messagingSenderId: "55007052465",
  appId: "1:55007052465:web:9516300b63c311cdc01890",
  measurementId: "G-STDYC0JGH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export default app;
