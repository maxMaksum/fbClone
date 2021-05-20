import firebase from 'firebase';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjgc3en4Wp8lLFrQPpmsSdDpJJmLCICmo",
    authDomain: "fb-clone-9367b.firebaseapp.com",
    projectId: "fb-clone-9367b",
    storageBucket: "fb-clone-9367b.appspot.com",
    messagingSenderId: "295046882959",
    appId: "1:295046882959:web:97c79860f6714248a0b2fa"
  };
  // Initialize Firebase
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig): firebase.app()

const db = app.firestore()
const storage = firebase.storage()

export {db, storage}