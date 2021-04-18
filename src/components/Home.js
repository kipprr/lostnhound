import React from 'react'
import Header from './Header'
import Signup from './Signup'
import SignupEmail from './Signup'
import { auth } from '../firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
// import {useCollectionData } from 'react-firebase-hooks'
import { Container, Jumbotron, Button, Navbar } from 'react-bootstrap'
import { AuthProvider } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'



function Home() {
    const history = useHistory()

    function handleClick() {
        history.push("/signup")
    }

    return (
        <div >
            <Jumbotron style={{margin: 20}}>
                <h1>Lost n Hound</h1>
                <h4>
                    A safety net to help find your pet if they ever get lost.
                </h4>
            </Jumbotron>
            <Container>
                <h5 style={{marginBottom: 15}}> How does it work? </h5>
                    <p> 1. Lost n Hound generates a website for your pet that you can update with the click of a button. </p>
                    <p> 2. Get your pet's unique URL printed on their collar tags.</p>
                    <p> 3. If your pet ever gets lost, update your information in your account. Your pet's website will display your contact information so that anyone who finds your pet can visit the website on their collar tags and contact you directly.</p>
                    <div className="w-100" style={{marginTop: 20}} >
                    <Button  variant="primary" onClick={handleClick}>Sign Up</Button>       
                </div>  
            </Container>

            
        </div>
    )
}

export default Home