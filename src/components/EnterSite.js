import React from 'react'
import Header from './Header'
import Signup from './Signup'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import Login from './Login'
import SignupEmail from './Signup'
import { auth } from '../firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
// import {useCollectionData } from 'react-firebase-hooks'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../context/AuthContext'



function EnterSite() {
    return (
        <div>
            <AuthProvider>
                <Container
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "100vh"}}
                >
                    <div className="w-100" style={{ maxWidth: '400px' }} >
                        <Route path="/login" exact component={() => <Login />} />
                        <Route path="/signup" exact component={() => <Signup />} />
                    </div> 
                    
                </Container>
            </AuthProvider>
        </div>
    )
}

export default EnterSite