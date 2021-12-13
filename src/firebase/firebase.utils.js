import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: "AIzaSyCCIqZkX8W_Y7kIV_ZmsUuCXoZDHduz6ck",
  authDomain: "crwn-db-fca9a.firebaseapp.com",
  projectId: "crwn-db-fca9a",
  storageBucket: "crwn-db-fca9a.appspot.com",
  messagingSenderId: "118509977173",
  appId: "1:118509977173:web:ae7726cd7745f503f6dedc"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;