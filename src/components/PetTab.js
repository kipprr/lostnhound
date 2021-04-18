import React from 'react'

function PetTab(props) {
    const { name, description, lost } = props.pet;

    return (
        <div>
            <p>{name}</p>
            <p>{description}</p>
            <p>{lost.toString()}</p>
        </div>
    )
}

export default PetTab