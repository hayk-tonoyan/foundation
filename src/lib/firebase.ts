import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0PtcSH8MMqeXlar058cYs2XNGu0Zs9GM",
  authDomain: "hay-netowrk.firebaseapp.com",
  projectId: "hay-netowrk",
  storageBucket: "hay-netowrk.firebasestorage.app",
  messagingSenderId: "24880228662",
  appId: "1:24880228662:web:fc05c8245537bf66cfeb97"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
