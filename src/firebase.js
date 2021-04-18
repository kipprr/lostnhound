import firebase from "firebase/app"
import 'firebase/firestore'
import "firebase/auth"

import { useAuthState } from 'react-firebase-hooks/auth'
//import { useCollectionData } from 'react-firebase-hooks'
  

const app =  firebase.initializeApp({
    apiKey: "AIzaSyByOezyEKBOXeWFhRxoRNWcBO1Er3VzL1I",
    authDomain: "lostnhound-30752.firebaseapp.com",
    projectId: "lostnhound-30752",
    storageBucket: "lostnhound-30752.appspot.com",
    messagingSenderId: "507446378634",
    appId: "1:507446378634:web:de04176ed8151f3faf2d73",
    measurementId: "G-J7ZZJVS3P9"
  });


export const auth = app.auth();
export const firestore = app.firestore();
export default app;