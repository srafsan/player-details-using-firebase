import { useState, useEffect } from 'react';
import initializeAuthentication from '../Firebase/Firebase.init'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth()

    // * Handles the Sign in
    const handleSignIn = () => {
        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
            }).catch((error) => {
                console.log(error.message);
            });
    }

    // * Handles the Sign Out
    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                console.log(error.message);
            });
    }

    // * Observing the user state change
    useEffect(() => {
        const loginState = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser)
                setUser(currentUser);
            else
                setUser({})
        })

        return () => loginState;
    }, [auth])

    return { user, handleSignIn, handleSignOut }
};

export default useFirebase;