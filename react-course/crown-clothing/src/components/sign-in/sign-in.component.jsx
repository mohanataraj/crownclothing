// eslint-disable-next-line
import { async } from '@firebase/util';
import { useState } from 'react';
import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput  from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import './sign-in.styles.scss';



const defaultFormFields = {

    email:'',
    password:'' 
};


const SignIn = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {  email, password} = formFields;

  
    
    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email,password);
           

            resetFormFields();
        }catch(error){
            if(error.code === "auth/wrong-password"){
                alert("incorrect password");
            }
            if(error.code === "auth/user-not-found"){
                alert("user not found");
            }
            console.log("Sign In Error: ", error.message);
        }
            
    }


    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        
    }
      
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields,[name]:value})
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account ?</h2>
            <span>Sign In with your E-mail and Password</span>

            <form onSubmit={handleSubmit}>   
                 <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />
                 <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />
            <div className='buttons-container'>
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type='submit'>Sign In</Button>
                <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
            </div>
          
            </form>
        </div>
    )
}

export default SignIn;