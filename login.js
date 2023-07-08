import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDSgcql--hM2mnjOUceh1Ts4J79G-k9XpQ",
    authDomain: "assignasment.firebaseapp.com",
    projectId: "assignasment",
    storageBucket: "assignasment.appspot.com",
    messagingSenderId: "347775862959",
    appId: "1:347775862959:web:d102698d0e7699a139ec5a",
    measurementId: "G-PK32QDJP51"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const signUpButton = document.querySelector("#signUpButton");
const signInButton = document.querySelector("#signInButton");

const signup = async(event) => {
    event.preventDefault();
    const signUpEmail = userEmail.value;
    const signUpPassword =  userPassword.value;
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        window.location.href = "http://127.0.0.1:5500/dashboard.html";
        alert("Your account has been created!");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
    });
};

const signin = async(event) => {
    event.preventDefault();
    const signInEmail = userEmail.value;
    const signInPassword =  userPassword.value;
    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((userCredential) => {
       const user = userCredential.user;
        alert("You have signed in successfully!");
        window.location.href = "http://127.0.0.1:5500/dashboard.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
    });
};


const logout = async(event) => {
    event.preventDefault();
    await signOut(auth);
    user = null;
    window.location.href = "http://127.0.0.1:5500/login.html";
};


signUpButton.addEventListener("click", signup);
signInButton.addEventListener("click", signin);