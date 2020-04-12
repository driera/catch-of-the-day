import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC2ATpgV5Ahutf31yKjKXcbXmGS4S26xRI",
  authDomain: "catch-of-the-day-node.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-node.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());


export { firebaseApp };
export default base;
