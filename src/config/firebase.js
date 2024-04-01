import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyD2GYiEyPU7fmIKJgqfbfl8uyUx3ztJXvA",
  authDomain: "react-firebase-gallery-d-3a4d7.firebaseapp.com",
  databaseURL: "https://react-firebase-gallery-d-3a4d7-default-rtdb.firebaseio.com",
  projectId: "react-firebase-gallery-d-3a4d7",
  storageBucket: "react-firebase-gallery-d-3a4d7.appspot.com",
  messagingSenderId: "413999665346",
  appId: "1:413999665346:web:f77d122f8205f80ef82b5b"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage().ref();

export { auth, database, firestore, storage }