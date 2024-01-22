import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVwy9R07l_BaDLWCCiAtK6tInB5rLAA_k",
  authDomain: "shopping-a7cad.firebaseapp.com",
  projectId: "shopping-a7cad",
  storageBucket: "shopping-a7cad.appspot.com",
  messagingSenderId: "21611337148",
  appId: "1:21611337148:web:3786682d5559af694d87b9",
  measurementId: "G-FB6W2SFB77",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
