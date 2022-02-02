import firebase from 'firebase'


var firebaseConfig = {
  apiKey: "AIzaSyC01gs49xVSS7QDPqfQSVELauxap3LUzrc",
  authDomain: "c-71-104d6.firebaseapp.com",
  projectId: "c-71-104d6",
  storageBucket: "c-71-104d6.appspot.com",
  messagingSenderId: "409942262312",
  appId: "1:409942262312:web:c3a9dae472c06ac66b2b1d"
}

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
