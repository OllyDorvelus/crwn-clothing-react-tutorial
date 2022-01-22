import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDFGfR0mbELZkBTZilwmU6Medct3tKKTLs",
    authDomain: "crwn-db-8a879.firebaseapp.com",
    projectId: "crwn-db-8a879",
    storageBucket: "crwn-db-8a879.appspot.com",
    messagingSenderId: "934993769217",
    appId: "1:934993769217:web:300984e1f69f34237fe100"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;