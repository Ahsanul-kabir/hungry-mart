import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAHTjrdPXbjUDs6d2H2NAe2kD3_0-dMMUU",
    authDomain: "hungry-mart-e426b.firebaseapp.com",
    projectId: "hungry-mart-e426b",
    storageBucket: "hungry-mart-e426b.appspot.com",
    messagingSenderId: "311695815804",
    appId: "1:311695815804:web:f68678647a976d666f45f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;