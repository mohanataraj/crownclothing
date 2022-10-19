/* eslint-disable react-hooks/exhaustive-deps */
// import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils';
// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import SignUp from '../../components/sign-up/sign-up.component';
import SignIn from '../../components/sign-in/sign-in.component';

import './authentication.styles.scss';

const Authentication = () => {

/*    useEffect(()=>{
        async function getRedirectStateRes(){
            const response = await getRedirectResult(auth);
            if(response){
                const userDocRef = await createUserDocumentFromAuth(response.user)
            }
        }

        getRedirectStateRes();
    }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        
    }
    const logGoogleUserRedirect = async () => {
        const {user} = await signInWithGoogleRedirect();
       
    }*/
    return (
    <div className='authentication-container'>
          
        <SignUp />
        <SignIn />
    </div>
    )
}

export default Authentication;