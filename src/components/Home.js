import React from 'react'
import Header from './Header'
import Signup from './Signup'
import { auth, firestore } from '../firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
// import {useCollectionData } from 'react-firebase-hooks'


function Home() {
    const [user] = useAuthState(auth);
    return (
        <div>
            {user ? <Header /> : <Signup />}
            <p>lost n hound</p>
            <p>catchy phrase</p>
            <button>Get Started</button>
        </div>
    )
}

export default Home