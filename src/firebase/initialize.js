import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";

const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}
export default initializeFirebase;