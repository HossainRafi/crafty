// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfkxAnCE15GblO-BHmr5cktw8UoP0nZ5k",
  authDomain: "crafty-55e7d.firebaseapp.com",
  projectId: "crafty-55e7d",
  storageBucket: "crafty-55e7d.appspot.com",
  messagingSenderId: "979370680552",
  appId: "1:979370680552:web:cb0e97f4e29b4daa19a95d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
