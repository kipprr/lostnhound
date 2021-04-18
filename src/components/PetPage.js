import React from 'react'
import Header from './Header'
import PetDisplay from './PetDisplay'
import Sidebar from './Sidebar';
import PetForm from './PetForm';
import { Container, Row, Col } from 'react-bootstrap'

function PetPage(){
    return (
        <div>
            <Header />
        
                <Row>
                    <Col ><Sidebar /></Col>
                    <Col ><PetForm /></Col>
                </Row>
           
        
            
            
            
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