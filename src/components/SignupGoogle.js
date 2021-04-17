import React from 'react'
import { auth } from '../firebase.js'
import firebase from 'firebase/app'

function SignupGoogle(){
const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
}

    return (
        <div>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}

export default SignupGoogle;