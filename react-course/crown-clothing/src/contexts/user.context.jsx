import { createContext, useReducer } from "react";
import { setCurrentUser } from "../store/user/user.action";

// actual user value - to be accessed is stored in UserContext obj...
// default values : are stored in the UserContext obj = null... 
// createContext : creates a context...
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});






// Is a wrapper around the components that require user context - user value
/*export const UserProvider = ({children}) => {

    // useState is used to call the currentUser value anywhere within the child component tree...
   // const [currentUser, setCurrentUser] = useState(null)
      
        const [ state, dispatch ] = useReducer(userReducer, INITIAL_STATE )
        const  { currentUser } = state
       
        //console.log("state",state) 
        const value = { currentUser, setCurrentUser }

    //signOutUser();

  

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
} */