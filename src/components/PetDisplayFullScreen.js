import React from 'react'
import { Container } from 'react-bootstrap'

function PetDisplayFullScreen(props){

    const { id, name, description, lost, contact } = props.pet
    
    var message = ''
    var messagePart2 =''
    var messagePart3 = ''
    var Name = name[0].toUpperCase() + name.substring(1)
    if (lost) {
        message = Name + " is lost."
        messagePart2 = "Please contact the owners to get " + Name + " home safely."
        messagePart3 = contact
    } else {
        message = Name + " is not lost."
        messagePart2 = "Thanks for checking in!"
    }

    return (
        <Container>
           
            <p>{message}</p>
            <p>{messagePart2}</p>
            <p>{messagePart3}</p>
        </Container>
    )
}

export default PetDisplayFullScreen;