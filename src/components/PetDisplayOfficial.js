import React from 'react'
import { Alert, Container, Tab } from 'react-bootstrap'
import '../css/Sidebar.css'
import { firestore } from '../firebase.js'
import Header from './Header'
import { useParams } from 'react-router-dom'
import { usePet } from '../context/PetContext'

function PetDisplayOfficial(){

    const { id } = useParams()
    const { currentPet } = usePet()

    
    var temp = "#" + id
    var message = ''
    var messagePart2 =''
    
    var Name = currentPet.name

    var Name = Name[0].toUpperCase() + Name.substring(1)
    if (currentPet.lost) {
        message = Name + " is lost."
        messagePart2 = "Please contact the owners to get " + Name + " home safely."
    } else {
        message = Name + "is not lost."
        messagePart2 = "Thanks for checking in!"
    }

    return (
        <div>
            <Header />
            <Container className="nonHeader">
                <p>why</p>
                <p>{message}</p>
                <p>{messagePart2}</p>
            </Container>
           
        </div>
            
    )
}

export default PetDisplayOfficial