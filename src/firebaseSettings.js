import firebase from "firebase";

// // Add the Firebase services that you want to use
// import "firebase/auth";
// import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "UUU",
    authDomain: "the-nice-place.firebaseapp.com",
    databaseURL: "https://the-nice-place.firebaseio.com",
    projectId: "the-nice-place",
    storageBucket: "the-nice-place.appspot.com",
    messagingSenderId: "UUU",
    appId: "UUU",
    measurementId: "UUU"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;