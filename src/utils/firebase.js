import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCaWE5VjWXn00SlGZ0ih5LAKYQW-Pyeitc",
    authDomain: "richstripe-2959e.firebaseapp.com",
    projectId: "richstripe-2959e",
    storageBucket: "richstripe-2959e.appspot.com",
    messagingSenderId: "63984082955",
    appId: "1:63984082955:web:2a8e6544d21c2fbcb4670e",
    measurementId: "G-BQPKE2SPKM"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)
  

  export {auth}
  export default db