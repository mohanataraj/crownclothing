import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth, signOutUser, auth } from "../utils/firebase/firebase.utils";

// actual user value - to be accessed is stored in UserContext obj...
// default values : are stored in the UserContext obj = null... 
// createContext : creates a context...
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

// Is a wrapper around the components that require user context - user value
export const UserProvider = ({children}) => {

    // useState is used to call the currentUser value anywhere within the child component tree...
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }

    //signOutUser();

    //this useEffect is used to centralize the user authentication, instead of calling the useContext and setting the user call manually...
    // hook runs only when the component mounts...
    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{

            if(user){
             createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
           console.log("unsubscribe",user,"Auth",auth);

        });
            
        return unsubscribe;
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
} 