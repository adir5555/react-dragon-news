import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";


export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProbiders = ({ children }) => {
    const [user, setuser] = useState(null);
    const [looding, setLooding]= useState(true);

    const createUser = (email, password) => {
        setLooding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logSingin =(email, password)=>{
        setLooding(true);
        return signInWithEmailAndPassword(auth, email, password);

    }
    const logout = () =>{
        setLooding(true);
       return signOut(auth);
      
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('how can i halp you', currentUser);
            setuser(currentUser);
            setLooding(false);
        });
     return () =>{
        unSubscribe();
     }

    }, [])

    const authInfo = {
        user,looding,
        createUser,
        logSingin,
        logout,
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProbiders;