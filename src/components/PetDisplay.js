import React from 'react'
import { Tab, Card, Row, Col, Container, Button, Modal } from 'react-bootstrap'
import { firestore } from '../firebase.js'
import { Link, useHistory } from 'react-router-dom'


function PetDisplay(props){

    const { id, name, description, lost, contact } = props.pet
    const history = useHistory()
    var temp = "#" + id
    var petURL = "/pet/" + id
    var editURL = "/edit/" + id
    var message = ''
    var messagePart2 =''
    var messagePart3 = ''
    var Name = name[0].toUpperCase() + name.substring(1)
    
    if (lost) {
        message = Name + " is lost."
        messagePart2 = "Please contact the owners to get " + name + " home safely."
        messagePart3 = contact
    } else {
        message = Name + " is not lost."
        messagePart2 = "Thanks for checking in!"
    }

    function handleDeletePet() {
        firestore.collection("pets").doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    function handleEditPet() {
        history.push(editURL)
    }

    return (
        <Tab.Pane eventKey={temp}>
            
            <h2>Preview</h2>
                <p>The box below will be displayed at <Link to={petURL}>your special link</Link></p>
                <Card>
                    <Card.Body>
                    <p>{message}</p>
                    <p>{messagePart2}</p>
                    <p>{messagePart3}</p>
                    </Card.Body>
                </Card>
                <Container fluid className="w-100 text-center mt-2">
                    <Row>
                        <Col>
                        <Button variant="light" className="editPetButton" onClick={handleEditPet}>Edit</Button>
                        
                        </Col>
                        <Col>
                            <Button variant="danger" className="deletePetButton" onClick={handleDeletePet}>Delete Pet</Button>
                        </Col>
                    </Row>
                </Container>
            
        </Tab.Pane>
    )
}

export default PetDisplay;