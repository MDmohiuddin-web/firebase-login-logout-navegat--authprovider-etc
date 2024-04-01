// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcwPrcRFqPrT_vW4rtb7sdZbuDfBbKqgQ",
  authDomain: "my-second-firebase-proje-c9b74.firebaseapp.com",
  projectId: "my-second-firebase-proje-c9b74",
  storageBucket: "my-second-firebase-proje-c9b74.appspot.com",
  messagingSenderId: "552993601134",
  appId: "1:552993601134:web:768bae8577c2c1c354587f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;