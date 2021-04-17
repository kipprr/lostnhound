import React, { useRef, useState } from 'react'
import { auth } from '../firebase.js'
import firebase from 'firebase/app'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'



function Login(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            setError('');
            setLoading(true); // this is so that the user cannot click submit more than once while the page is loading
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/dashboard")
        } catch {
            setError('Failed to login');
        }
        setLoading(false);
        
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
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
                        <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                    </Form>
                </Card.Body>

            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}

export default Login;