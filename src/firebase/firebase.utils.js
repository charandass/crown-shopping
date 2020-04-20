import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDDOWK3wg_OT_OMtcWUQVG5pjUH3QRLzEQ",
    authDomain: "crown-db-46a75.firebaseapp.com",
    databaseURL: "https://crown-db-46a75.firebaseio.com",
    projectId: "crown-db-46a75",
    storageBucket: "crown-db-46a75.appspot.com",
    messagingSenderId: "937954012445",
    appId: "1:937954012445:web:afae67d56bc8b17276c5f4",
    measurementId: "G-37MZ8SERG3"
  };

  export const createUserProfileDocument = async (userAuth, additionalData, ) => {
      if(!userAuth) return;

    
       
      const userRef = firestore.doc(`users/${userAuth.uid}`)
      const snapShot = await userRef.get();
    // console.log(snapShot)
    
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error) {
            console.log('error creatting user', error.message);
        }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;
