// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// ----匯入firebase---!!自己新增的指令
import {getAuth, GoogleAuthProvider} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-jkF2eQ4PB9LS7g9RH_vQpyhUiLIRIzc",
    authDomain: "react-aae0a.firebaseapp.com",
    projectId: "react-aae0a",
    storageBucket: "react-aae0a.firebasestorage.app",
    messagingSenderId: "623381471095",
    appId: "1:623381471095:web:e475e44da9d3c1e3520b72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ---匯出---!!自己新增的指令
export const auth =getAuth(app);
export const provide = new GoogleAuthProvider();