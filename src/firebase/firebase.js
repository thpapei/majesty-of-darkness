import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
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