import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfmaEKeV2QWIODcYJz7fo9vhogFoFpxYU",
  authDomain: "projeto-1-2d7ce.firebaseapp.com",
  databaseURL: "https://projeto-1-2d7ce.firebaseio.com",
  projectId: "projeto-1-2d7ce",
  storageBucket: "projeto-1-2d7ce.appspot.com",
  messagingSenderId: "326753588055",
  appId: "1:326753588055:web:2376981cddb0977d5f2412"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();