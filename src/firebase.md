# steps to create

1. develop
2. cloud firestore
   1. go to rules - erase if
      request.time < timestamp.date(2020, 11, 12);
      have ; after allow read/write
      - gets rid of 30 day expiry
3. authentication
   1. sign-in method
   2. enable google - put project support email
4. go to settings cog
   1. under web apps grab config sdk snippet
5. npm i firebase
6. in firebase.js add:

   1. import firebase from "firebase" (top)
   2. at bottom:
      const firebaseApp = firebase.initializeApp(firebaseConfig);
      const db = firebaseApp.firestore();
      const auth = firebase.auth();
      const provider = new firebase.auth.GoogleAuthProvider();

   export { auth, provider };
   export default db;
