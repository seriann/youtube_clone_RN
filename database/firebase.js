import firebase from 'firebase'

import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBFOsMtXp5zJU_l64qFF7a_qIDrET7c8kI",
    authDomain: "challengern-5875a.firebaseapp.com",
    projectId: "challengern-5875a",
    storageBucket: "challengern-5875a.appspot.com",
    messagingSenderId: "160488434687",
    appId: "1:160488434687:web:4dc57d262d0c9d4f9855ca"
  };
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
