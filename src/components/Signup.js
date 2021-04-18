import React, { useRef, useState } from 'react'
import { auth } from '../firebase.js'
import firebase from 'firebase/app'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'



function Signup(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
            return setError('Passwords do not match')
        }

        if (passwordRef.current.value.length < 6) {
            return setError('Password must be at least 6 characters')
        }
        
        try {
            setError('');
            setLoading(true); // this is so that the user cannot click submit more than once while the page is loading
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/dashboard")
        } catch  {
            if (error == 'Failed to create an account') {
                setError('Failed to create an account. May be invalid email address.')
            } else {
                setError('Failed to create an account')
            }
            
        }
        setLoading(false);
        
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="passwprd">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirmation">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmationRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Continue</Button>
                    </Form>
                </Card.Body>

            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </div>
    )
}

export default Signup;