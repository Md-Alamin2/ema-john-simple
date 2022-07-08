import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut   } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication()
const useFirebase = ()=>{
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const singInGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
        
    }
    const logOut =()=>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } 
          });
          
    },[])
    return {
        user,
        singInGoogle,
        logOut

    }
}

export default useFirebase;