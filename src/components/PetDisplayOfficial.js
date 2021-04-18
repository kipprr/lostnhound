import React from 'react'
import { Alert, Container, Tab } from 'react-bootstrap'
import '../css/Sidebar.css'
import { firestore } from '../firebase.js'
import Header from './Header'
import { useParams } from 'react-router-dom'
import { usePet } from '../context/PetContext'
import PetDisplayFullScreen from './PetDisplayFullScreen'
import { useDocumentData, useDocument } from 'react-firebase-hooks/firestore';

function PetDisplayOfficial(){

    const { id } = useParams()
  
   
    const [pets] = useDocumentData(firestore.collection('pets').doc(id))

    // console.log("[pets]", [pets])
    // console.log("pets", pets)
    // console.log("[pets][0]", [pets][0])

    

    return (
        <div>
            <Header />
            <div className="nonHeader">
                {pets && [pets].map(pet => <PetDisplayFullScreen pet={pet}/>)}
            </div>
           
        </div>
            
    )
}

export default PetDisplayOfficial