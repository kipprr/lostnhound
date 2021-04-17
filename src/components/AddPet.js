import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import PetForm from './PetForm'

function AddPet(){
    return (
        <div>
            <Header />
            <Sidebar />
            <PetForm />
        </div>
    )
}

export default AddPet;