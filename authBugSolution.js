import { onAuthStateChanged, getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  // ... your config...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

let unsubscribe;

const authStateChanged = () => {
  unsubscribe = onAuthStateChanged(auth, (user) => {
if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/auth/web/user-properties
  console.log(user.email);
  // ...
} else {
  // User is signed out
  // ...
}
  });
};

const unAuthStateChanged = () => {
  unsubscribe();
};

export {authStateChanged, unAuthStateChanged};