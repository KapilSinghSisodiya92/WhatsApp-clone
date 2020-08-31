import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDyxhCWUqkKCVwbq0Ite9qvRhmht7Fw388",
  authDomain: "whatsapp-clone-kapil.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-kapil.firebaseio.com",
  projectId: "whatsapp-clone-kapil",
  storageBucket: "whatsapp-clone-kapil.appspot.com",
  messagingSenderId: "766796129659",
  appId: "1:766796129659:web:8636b4679e13af6f0949de",
  measurementId: "G-MDG7DRMCTJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
