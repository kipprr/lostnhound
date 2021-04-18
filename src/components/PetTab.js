import React from 'react'
import {ListGroup } from 'react-bootstrap'

function PetTab(props) {
    const { id, name, description, lost } = props.pet
    var Name = name[0].toUpperCase() + name.substring(1)

    var temp = "#" + id
    return (
            <ListGroup.Item action href={temp}>
                {Name}
            </ListGroup.Item>
    )
}

export default PetTab