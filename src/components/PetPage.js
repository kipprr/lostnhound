import React from 'react'
import Header from './Header'
import PetDisplay from './PetDisplay'
import Sidebar from './Sidebar';
import PetForm from './PetForm';
import '../css/Sidebar.css'
import { Container, Row, Col } from 'react-bootstrap'

function PetPage(){
    return (
        <div>
            <Header />
            <Container fluid className="test">
                <Sidebar />
            </Container>
           
           
        
            
            
            
        </div>
    )
}

export default PetPage;

//  {/* if logged in but wrong pet */}
//  <Header />
//  <Sidebar />
//  <PetDisplay />
//  {/* if logged in and right pet */}
//  <Header />
//  <Sidebar />
//  <PetForm />
//  {/* if not logged in */}
//  <Header />
//  <PetForm />