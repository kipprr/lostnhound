import React from 'react'
import PetTab from './PetTab'

function Sidebar(){
    return (
        <div>
            <PetTab/>
            <PetTab/>
            <PetTab/>
            <p>add pet button</p>
            <p>settings button</p>
            <p>logout button</p>
        </div>
    )
}

//only render the number of pettabs for the number of pets
// advanced: set maximum number of pets?

//add pet button 

export default Sidebar