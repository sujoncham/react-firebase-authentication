// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfW9lXstCLfCoNtS2314vXzdVhu1rGuIM",
  authDomain: "ema-john-firebase-f7bfa.firebaseapp.com",
  projectId: "ema-john-firebase-f7bfa",
  storageBucket: "ema-john-firebase-f7bfa.appspot.com",
  messagingSenderId: "439581960706",
  appId: "1:439581960706:web:f510fc9d6418a047edd51b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
