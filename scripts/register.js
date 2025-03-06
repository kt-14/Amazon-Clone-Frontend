// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC_MlIjEWcnWm00rQlcYDIQ_SIdZjrk0k",
  authDomain: "clone-cf2f6.firebaseapp.com",
  projectId: "clone-cf2f6",
  storageBucket: "clone-cf2f6.appspot.com",
  messagingSenderId: "648642695611",
  appId: "1:648642695611:web:7fd5749bfa8418ae94349e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//submit button
const submit = document.getElementById("submit");

submit.addEventListener("click", function (event) {
  event.preventDefault()

  //inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Account Created Successfully")
      window.location.href = "login.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
})
