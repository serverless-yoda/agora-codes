import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBuyn4WMxr-KzmNYZMXMWSTpHXetFFx_-I",
    authDomain: "agora-db.firebaseapp.com",
    databaseURL: "https://agora-db.firebaseio.com",
    projectId: "agora-db",
    storageBucket: "agora-db.appspot.com",
    messagingSenderId: "1064304316559",
    appId: "1:1064304316559:web:3647cca510a4a04acf60fa"
  };

  
  
  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  export const firebaseCreateDocument = async(userAuth, otherData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}}`)
    const userSnapShot = await userRef.get()

    //console.log(userSnapShot)
    if(!userSnapShot.exist) {
       const {displayName, email} = userAuth;
       const createdAt = new Date()
       try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...otherData
          })
       } catch(error) {
          console.log("error creating user ",error.message)
       }

       return userRef
    }
  }

  export const createCollectionAndDocument = (collectionKey, collectionObject) => {
     const collectionRef = firestore.collection(collectionKey)
     console.log(collectionRef)
  } 


  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  
  export default firebase