import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjy8TOMKaAGYJdCAJtNhUVk9nMGi6QcC4",
    authDomain: "clone-3d506.firebaseapp.com",
    projectId: "clone-3d506",
    storageBucket: "clone-3d506.appspot.com",
    messagingSenderId: "788468886903",
    appId: "1:788468886903:web:ed932fbabe967063d38572",
    measurementId: "G-PJ6VG6PMJ8"
  };


    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();

export { db, auth };