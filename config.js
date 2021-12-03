import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyCE9y9rs7wLQw3O7JXIp9o9QFNsDLkASq8",
  authDomain: "project71-db896.firebaseapp.com",
  projectId: "project71-db896",
  storageBucket: "project71-db896.appspot.com",
  messagingSenderId: "824794469847",
  appId: "1:824794469847:web:a5eebe3e8486a4e6992792"

};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

