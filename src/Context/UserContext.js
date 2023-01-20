import React from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useEffect } from 'react';
import { useState } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googlePopUp = (provider) =>{
        return signInWithPopup(auth, provider)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {googlePopUp, user, loading};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;