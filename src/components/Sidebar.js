import React from 'react'
import PetTab from './PetTab'
import { Navbar, Card, Button, Container } from 'react-bootstrap'
import "../css/Sidebar.css"
import { useAuth } from '../context/AuthContext'
import { firestore } from '../firebase.js'
import { useCollectionData } from 'react-firebase-hooks/firestore';

function Sidebar(){

    const { currentUser } = useAuth()

    const petsRef = firestore.collection('pets')
    const query = petsRef.where("uid","==", currentUser.uid);
    const [pets] = useCollectionData(query)

    return (
        <div style={{backgroundColor: "lightblue", paddingTop: 60}}>
            {pets && pets.map(pet => <PetTab pet={pet}/>)}
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