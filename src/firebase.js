// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyD-DZI2xKeAtJmUkTiFH6uQVg6bmGt4o6w",
    authDomain: "hulkweb-fb-clone.firebaseapp.com",
    projectId: "hulkweb-fb-clone",
    storageBucket: "hulkweb-fb-clone.appspot.com",
    messagingSenderId: "789319597978",
    appId: "1:789319597978:web:8ea90cec6c62b13c8e8423",
    measurementId: "G-RQN4RLFGKJ"
  };

  const firebaseapp =firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth ,provider };
  export default db;
