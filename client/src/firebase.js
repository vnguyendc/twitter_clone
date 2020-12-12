import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_DT5JlinKMcu66owI5KetWBuCvSXfOU0",
    authDomain: "twitter-clone-3d07b.firebaseapp.com",
    projectId: "twitter-clone-3d07b",
    storageBucket: "twitter-clone-3d07b.appspot.com",
    messagingSenderId: "445879689347",
    appId: "1:445879689347:web:be73a17a4719d816f03bb6",
    measurementId: "G-PXE6BYG9MZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db