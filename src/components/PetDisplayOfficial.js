import React from 'react'
import { Alert, Container, Tab } from 'react-bootstrap'
import '../css/Sidebar.css'
import { firestore } from '../firebase.js'
import Header from './Header'
import { useParams } from 'react-router-dom'

async function PetDisplayOfficial(){

    const { id } = useParams();

    function getDoc(ident) {


        firestore.collection('pets').doc(id).get().then((doc) => {
            if (doc.exists) {
                return doc.data();
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                return (<Alert className="nonHeader" variant="danger">Invalid pet id, please check your URL</Alert>)
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });


        return 0;

    }

    var pet = null
    var petName = null;

    // const petsRef = firestore.collection('pets');

    // var docRef = petsRef.doc(id);

    
    // docRef.get().then((doc) => {

    await getDoc(id);
    
    // firestore.collection('pets').doc(id).get().then((doc) => {
    //     if (doc.exists) {
    //         pet= doc.data();
    //         petName = pet.name
    //         console.log("pet:", pet);
    //         console.log("pet.name:", pet.name);
    //         return (<p className="nonHeader">{pet.name}</p>)
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //         return (<Alert className="nonHeader" variant="danger">Invalid pet id, please check your URL</Alert>)
    //     }
    // }).catch((error) => {
    //     console.log("Error getting document:", error);
    // });

    console.log("pet2:", pet)
    // var temp = "#" + id
    // var message = ''
    // var messagePart2 =''
    
    // var Name = pet.name[0].toUpperCase() + pet.name.substring(1)
    // if (pet.lost) {
    //     message = Name + " is lost."
    //     messagePart2 = "Please contact the owners to get " + Name + " home safely."
    // } else {
    //     message = Name + "is not lost."
    //     messagePart2 = "Thanks for checking in!"
    // }

    return (
        <div>
            <Header />
            <Container className="nonHeader">
                <p>why</p>
                {/* <p>{message}</p>
                <p>{messagePart2}</p> */}
            </Container>
           
        </div>
            
    )
}

export default PetDisplayOfficial