import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIIQJrd8SmOrokhPvqNLwLHpyZQMMIlsk",
  authDomain: "durdona-project.firebaseapp.com",
  projectId: "durdona-project",
  storageBucket: "durdona-project.firebasestorage.app",
  messagingSenderId: "952663848654",
  appId: "1:952663848654:web:3c2d76c2304b8e1d0f029f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Auth
export const auth=getAuth()