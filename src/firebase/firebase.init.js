// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9YkZmAF1efnvMpxbuASjlHnu7PKocMjA",
  authDomain: "porcelain-tea.firebaseapp.com",
  projectId: "porcelain-tea",
  storageBucket: "porcelain-tea.firebasestorage.app",
  messagingSenderId: "816616943957",
  appId: "1:816616943957:web:590e33671d3b7e6b437fdc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
