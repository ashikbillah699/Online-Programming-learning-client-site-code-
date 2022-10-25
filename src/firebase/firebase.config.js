// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBghnsymDy1EdIyLYCHgNVoxaFCoviQ2WM",
    authDomain: "online-programming-learning.firebaseapp.com",
    projectId: "online-programming-learning",
    storageBucket: "online-programming-learning.appspot.com",
    messagingSenderId: "464585114928",
    appId: "1:464585114928:web:5e12a25afbb470a9a6f4f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;