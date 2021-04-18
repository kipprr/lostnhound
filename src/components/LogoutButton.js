import React from 'react'
import PetTab from './PetTab'
import { Card, Button } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

function LogoutButton(){
    const { logout } = useAuth()

async function handleLogout() {
    try {
        await logout()
    } catch {
        console.log("error")
    }
}

    return (
        <Button onClick={handleLogout}>Logout</Button>
    )
}

export default LogoutButton