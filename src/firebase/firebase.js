import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAB8oR_Fay8YPYRYUZj6U8aNhND2XrjTj4",
  authDomain: "firestore-project-f592d.firebaseapp.com",
  databaseURL: "https://firestore-project-f592d.firebaseio.com",
  projectId: "firestore-project-f592d",
  storageBucket: "firestore-project-f592d.appspot.com",
  messagingSenderId: "51990479936",
  appId: "1:51990479936:web:3810409df44f531dc2cba5"
};

firebase.initializeApp(firebaseConfig);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const database = firebase.firestore();
const auth = firebase.auth();

export const startLogin = async () => {
  try {
    return auth.signInWithPopup(googleAuthProvider);
  } catch (error) {
    console.log('Login failed: ', error.message);
  }
}

export const startLogout = async () => {
  try {
    return auth.signOut();
  } catch (error) {

  }
}

export { googleAuthProvider, database, auth };