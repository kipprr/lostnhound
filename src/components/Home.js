import React from 'react'
import Header from './Header'
import Signup from './Signup'
import SignupEmail from './Signup'
import { auth } from '../firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
// import {useCollectionData } from 'react-firebase-hooks'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../context/AuthContext'



function Home() {
    const [user] = useAuthState(auth);
    return (
        <div>
            <p>lost n hound</p>
            <p>catchy phrase</p>
            <button>Get Started</button>
        </div>
    )
}

export default Home