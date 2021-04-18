import React from 'react'
import PetTab from './PetTab'
import PetDisplay from './PetDisplay'
import { Navbar, Card, Button, Container , Tab, Row, Col, ListGroup, ListGroupItem, Sonnet} from 'react-bootstrap'
import "../css/Sidebar.css"
import { useAuth } from '../context/AuthContext'
import { firestore } from '../firebase.js'
import { useCollectionData } from 'react-firebase-hooks/firestore';

function Sidebar(){

    const { currentUser } = useAuth()

    const petsRef = firestore.collection('pets')
    const query = petsRef.where("uid","==", currentUser.uid);
    const [pets] = useCollectionData(query, {idField: 'id'})

    return (
        <div style={{backgroundColor: "lightblue", paddingTop: 60}}>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
                <Col sm={4}>
                <ListGroup>
                        {pets && pets.map(pet => <PetTab key={pet.id} pet={pet}/>)}
                </ListGroup>
                </Col>
                <Col sm={8}>
                <Tab.Content>
                    {pets && pets.map(pet => <PetDisplay key={pet.id} pet={pet}/>)}
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
            
         
            <Button>Add Pet</Button>
          
            <div id="footer">
                <div>
                    <p>settings button</p>
                </div>
                <div>
                    <p>logout button</p>
                </div>
                
                
            </div>
            
        </div>
    )
}

//only render the number of pettabs for the number of pets
// advanced: set maximum number of pets?

//add pet button 

export default Sidebar