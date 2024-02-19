import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCFb2RUV11CR22gXXgdakkbbcyCIwhGrug",
  authDomain: "food-login-25cba.firebaseapp.com",
  projectId: "food-login-25cba",
  storageBucket: "food-login-25cba.appspot.com",
  messagingSenderId: "560670231891",
  appId: "1:560670231891:web:b0790bd4431bc969c225a6"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)