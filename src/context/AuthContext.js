import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase.js'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password) 
        
    }

    function logout() {
        return auth.signOut()
    }

    useEffect(() => {
        // when we unmount this component, we unsubscribe from the listener
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false) //its loading until it did the verification to get the currentUser
        })

        return unsubscribe
    }, [])
    

    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
            {/* if it is loading (still checking the currentUser), we don't want any children rendered */}
        </AuthContext.Provider>
    )
}