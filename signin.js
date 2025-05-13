// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js"; // Added necessary imports

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL1c7RRTo4Uv1FpbnVZaZN5wfEK0yqmL4",
  authDomain: "steal-deals.firebaseapp.com",
  projectId: "steal-deals",
  storageBucket: "steal-deals.firebasestorage.app",
  messagingSenderId: "658295422849",
  appId: "1:658295422849:web:e2e2ecdd31b50835397280",
  measurementId: "G-DH0ER4G63Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login
const submit1 = document.getElementById("submit1");
submit1.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill in both email and password.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = "index.html"; // Redirect to the landing page after login
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === 'auth/wrong-password') {
        alert('Incorrect password. Please try again.');
      } else if (errorCode === 'auth/user-not-found') {
        alert('No user found with this email.');
      } else {
        alert(errorMessage);
      }
    });
});

// Forgot Password
const forget1 = document.getElementById("forget1");
forget1.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;

  if (!email) {
    alert("Please enter your email address.");
    return;
  }

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Password reset email sent!");
    })
    .catch((error) => {
      alert(error.message);
    });
});
