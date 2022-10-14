import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCKSjpfpzID5OY-GTtIeQAQ6eH_v6zSza4",
    authDomain: "dogposting-15d81.firebaseapp.com",
    projectId: "dogposting-15d81",
    storageBucket: "dogposting-15d81.appspot.com",
    messagingSenderId: "460646581142",
    appId: "1:460646581142:web:a8f1b0dd93a678d6a193b7",
    measurementId: "G-PHM1DFKX43"
  };

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

export default db;