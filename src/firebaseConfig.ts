import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4sEb0oHWE_gX7acphho4tO6Kgb5wv1R8",
  authDomain: "codewar-1639e.firebaseapp.com",
  projectId: "codewar-1639e",
  storageBucket: "codewar-1639e.appspot.com",
  messagingSenderId: "271272571859",
  appId: "1:271272571859:web:849acc7f8a56de005db526",
  measurementId: "G-T7KKEK76QE",
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };




