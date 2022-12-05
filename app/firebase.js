// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqeWIP6hB6HOsMSOjl_SqhbPemGo29E7g",
  authDomain: "oauth-signin-bd01f.firebaseapp.com",
  projectId: "oauth-signin-bd01f",
  storageBucket: "oauth-signin-bd01f.appspot.com",
  messagingSenderId: "17241286441",
  appId: "1:17241286441:web:710983bcbc6eee89423938"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);