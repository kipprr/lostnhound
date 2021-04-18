import React from 'react'
import { Alert, Container, Tab, Card } from 'react-bootstrap'
import '../css/Sidebar.css'
import { firestore } from '../firebase.js'
import Header from './Header'
import { useParams, Link } from 'react-router-dom'
import { usePet } from '../context/PetContext'
import PetDisplayFullScreen from './PetDisplayFullScreen'
import { useDocumentData, useDocument } from 'react-firebase-hooks/firestore';

function PetDisplayOfficial(){

    const { id } = useParams()
  
   
    const [pets] = useDocumentData(firestore.collection('pets').doc(id), {idField: 'id'})

    // console.log("[pets]", [pets])
    // console.log("pets", pets)
    // console.log("[pets][0]", [pets][0])

    

    return (
        <Container
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "100vh"}}
                >
            <div className="w-100" style={{ maxWidth: '400px' }} >
                <Card>
                    <Card.Body>
                    {pets && [pets].map(pet => <PetDisplayFullScreen key={pet.id} pet={pet}/>)}
                    </Card.Body>
                </Card>
            </div> 
        </Container>
            
    )
}

export default PetDisplayOfficial