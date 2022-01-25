import firebase from 'firebase/app';
import 'firebase/auth';
import Constants from 'expo-constants';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyATS-Zppf4YOPioeKAp0Usyn38Cy-aVwVk",
  authDomain: "rn-insta-clone-yt.firebaseapp.com",
  projectId: "rn-insta-clone-yt",
  storageBucket: "rn-insta-clone-yt.appspot.com",
  messagingSenderId: "481184972694",
  appId: "1:481184972694:web:2c8c1b12d33d7144fa27b7"
};

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;
