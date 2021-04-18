import React from 'react'
import { Tab } from 'react-bootstrap'

function PetDisplay(props){

    const { id, name, description, lost } = props.pet
    var temp = "#" + id
    var message = ''
    var messagePart2 =''
    var Name = name[0].toUpperCase() + name.substring(1)
    if (lost) {
        message = Name + " is lost."
        messagePart2 = "Please contact the owners to get " + name + " home safely."
    } else {
        message = Name + "is not lost."
        messagePart2 = "Thanks for checking in!"
    }

    return (
        <Tab.Pane eventKey={temp}>
            {/* <Sonnet /> */}
            <p>{message}</p>
            <p>{messagePart2}</p>
        </Tab.Pane>
    )
}

export default PetDisplay;