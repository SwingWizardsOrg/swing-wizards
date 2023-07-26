import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  //config
  apiKey: "AIzaSyCOh-egZWNUTI1A-0Stgv7oS8yx5wr6sXA",
  authDomain: "swingwizards-682f9.firebaseapp.com",
  projectId: "swingwizards-682f9",
  storageBucket: "swingwizards-682f9.appspot.com",
  messagingSenderId: "427204282312",
  appId: "1:427204282312:web:6c3ed8a16e5f64e24ba2fd",
  measurementId: "G-J4RZ15J28K"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);