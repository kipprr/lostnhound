import React from 'react'
import Header from './Header'
import PetDisplay from './PetDisplay'
import Sidebar from './Sidebar';
import PetForm from './PetForm';

function PetPage(){
    return (
        <div>
            {/* if logged in but wrong pet */}
            <Header />
            <Sidebar />
            <PetDisplay />
            {/* if logged in and right pet */}
            <Header />
            <Sidebar />
            <PetForm />
            {/* if not logged in */}
            <Header />
            <PetForm />
        </div>
    )
}

export default PetPage;