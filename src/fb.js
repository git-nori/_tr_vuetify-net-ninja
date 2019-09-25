import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBDDF3FoNRrRy4z2qAa_pGe_oAOxBegiGQ",
  authDomain: "todo-ninja-5a0c4.firebaseapp.com",
  databaseURL: "https://todo-ninja-5a0c4.firebaseio.com",
  projectId: "todo-ninja-5a0c4",
  storageBucket: "todo-ninja-5a0c4.appspot.com",
  messagingSenderId: "943069873630",
  appId: "1:943069873630:web:2b1284b8695477094e894f",
  measurementId: "G-JESXD8KE7E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 既存の設定がtrueだからいらないっぽい
// db.settings({ timestampsInSnapshots: true })

export default db;