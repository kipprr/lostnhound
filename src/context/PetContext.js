// import React, { useContext, useEffect, useState } from 'react'
// import { firestore} from '../firebase.js'

// const PetContext = React.createContext()

// export function usePet() {
//     return useContext(PetContext)
// }

// export function PetProvider({ children }) {

//     const [currentPet, setCurrentPet] = useState(null)
//    // const [currentUser, setCurrentUser] = useState()
//     const [loading, setLoading] = useState(true)

  
//     function getDoc(id) {
//         firestore.collection("pets").doc(id).get().then((doc) => {
//             if (doc.exists) {
//                 console.log("Document data:", doc.data());
//             } else {
//                 // doc.data() will be undefined in this case
//                 console.log("No such document!");
//             }
//         }).catch((error) => {
//             console.log("Error getting document:", error);
//         });
//         return doc.data()
//     }


//     useEffect(() => {
//         // when we unmount this component, we unsubscribe from the listener
//         const unsubscribe = firestore.collection("pets").doc(id)
//         .onSnapshot((doc) => {
//         // Respond to data
//         // ...
//             var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
//             console.log(source, " data: ", doc.data());
//             setCurrentPet(doc.data())
//             setLoading(false)
//         });

//         // Later ...

//         // Stop listening to changes
//         return unsubscribe
        
        
//         // const unsubscribe = auth.onAuthStateChanged(user => {
//         //     setCurrentUser(user)
//         //     setLoading(false) //its loading until it did the verification to get the currentUser
//         // })

//         // return unsubscribe
//     }, [])
    

//     const value = {
//         currentPet
//     }

//     return (
//         <PetContext.Provider value={value}>
//             {!loading && children}
//             {/* if it is loading (still checking the currentPet, we don't want any children rendered */}
//         </PetContext.Provider>
//     )
// }