import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCqs4lObVc8FtaRTRwObMGDhBb0PCCYKeo",
    authDomain: "react-project-a3960.firebaseapp.com",
    databaseURL: "https://react-project-a3960-default-rtdb.firebaseio.com",
    projectId: "react-project-a3960",
    storageBucket: "react-project-a3960.appspot.com",
    messagingSenderId: "520622513593",
    appId: "1:520622513593:web:605b608ff0fbd5570d2a68"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.database().ref();

export default db;