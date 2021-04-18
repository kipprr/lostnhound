import React, { useRef, useState } from 'react'
import { Container, Form, Button} from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { useHistory, useParams } from 'react-router-dom'
import { firestore } from '../firebase.js'
import Header from './Header'
import '../css/Sidebar.css'


function PetEditForm(){

    const { id } = useParams()
    const nameRef = useRef();
    const descriptionRef = useRef();
    const statusRef = useRef();
    const contactRef = useRef();
    const { currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory()
    const petsRef = firestore.collection('pets')

    async function handleSubmit(e) {
        e.preventDefault();

        // if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
        //     return setError('Passwords do not match')
        // }

        // if (passwordRef.current.value.length < 6) {
        //     return setError('Password must be at least 6 characters')
        // }

        var lostStatus = false;

        if (statusRef.current.value === 'Yes, my pet is currently lost.') {
            lostStatus = true;
        }

        if (statusRef.current.value === 'No, my pet is not currently lost.') {
            lostStatus = false;
        }

        const uid = currentUser.uid;
        
        try {
            // make a new pet


            // setError('');
            // setLoading(true); // this is so that the user cannot click submit more than once while the page is loading
            // await signup(emailRef.current.value, passwordRef.current.value);
           
            await petsRef.doc(id).set({
                name: nameRef.current.value,
                description: descriptionRef.current.value,
                lost: lostStatus,
                contact: contactRef.current.value,
                uid
            })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
            history.push("/dashboard")


        } catch  {
            // if (error == 'Failed to create an account') {
            //     setError('Failed to create an account. May be invalid email address.')
            // } else {
            //     setError('Failed to create an account')
            // }
            
        }
        // setLoading(false);
        
    }


    return (
        <div>
            <Header />
                <Container
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "100vh"}}
                >
                    <div className="w-100" style={{ maxWidth: '400px' }} >
                    <Container >
                    <h2 className="text-center mb-4">Edit Pet</h2>
                    {/* {error && <Alert variant="danger">{error}</Alert>} */}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="name">
                            <Form.Label>Pet Name</Form.Label>
                            <Form.Control type="text" ref={nameRef} required />
                        </Form.Group>
                        <Form.Group id="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" ref={descriptionRef} required />
                        </Form.Group>
                        <Form.Group id="status">
                            <Form.Label>Is your pet currently lost?</Form.Label>
                            <Form.Control as="select" ref={statusRef} required>
                                <option>Yes, my pet is currently lost.</option>
                                <option>No, my pet is not currently lost.</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group id="contact">
                            <Form.Label>List the contact information that you would like to be displayed if your pet is lost.</Form.Label>
                            <Form.Control as="textarea" ref={contactRef} required>
                            </Form.Control>
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Submit</Button>
                    </Form>
                    </Container>
                    </div> 
                </Container>
        </div>
        
       
    )
}

export default PetEditForm

{/* <div style={{backgroundColor: "red", paddingTop: 60}}>
<p>[pet form]</p>
</div> */}