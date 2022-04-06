//import * as firebase from 'firebase/app'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBB0_yiolGC4M7vQiL7XktLBPbjXblCpts",
    authDomain: "crud-ea72c.firebaseapp.com",
    projectId: "crud-ea72c",
    storageBucket: "crud-ea72c.appspot.com",
    messagingSenderId: "252085165013",
    appId: "1:252085165013:web:36bcbb30cff2ac9326fb5c"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);