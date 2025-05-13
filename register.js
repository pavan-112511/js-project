// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js"; // Fixed the version and added the import
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js"; // Fixed version

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
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Get the signup form element
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get email and password values from the form
  const email = signupForm.email.value;
  const password = signupForm.password.value;

  // Validate that both email and password are provided
  if (!email || !password) {
    alert("Please fill in both the email and password.");
    return;
  }

  // Create user with email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("✅ User created:", userCredential.user);
      window.location.href = "signin.html"; // Redirect to the signin page after successful registration
    })
    .catch((error) => {
      console.error("❌ Error creating user:", error);

      // Handle Firebase errors
      if (error.code === 'auth/email-already-in-use') {
        alert("This email is already registered. Please try logging in instead.");
      } else if (error.code === 'auth/invalid-email') {
        alert("Invalid email format.");
      } else if (error.code === 'auth/weak-password') {
        alert("Password should be at least 6 characters.");
      } else {
        alert(error.message);
      }
    });
});
