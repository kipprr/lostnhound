import React from 'react'
import { auth } from '../firebase.js'

function SignOutButton() {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export default SignOutButton;