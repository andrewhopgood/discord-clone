import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDhEoYWIokpbiYAhm9gdapo-xl7G5Z21n4",
  authDomain: "discord-clone-53dd1.firebaseapp.com",
  databaseURL: "https://discord-clone-53dd1.firebaseio.com",
  projectId: "discord-clone-53dd1",
  storageBucket: "discord-clone-53dd1.appspot.com",
  messagingSenderId: "1073535671933",
  appId: "1:1073535671933:web:44be0f4cd1bea0c3eedb14",
  measurementId: "G-H6BWFZSTB5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
