import React from 'react'
import SignOutButton from './SignOutButton'
import LogoutButton from './LogoutButton'
import { Navbar } from 'react-bootstrap'

function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand >Lost n Hound</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <LogoutButton />
                </Navbar.Collapse>
            </Navbar>
            
        </div>
    )
}

export default Header