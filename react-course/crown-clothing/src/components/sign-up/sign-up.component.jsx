// eslint-disable-next-line
import { async } from '@firebase/util';
import { useState } from 'react';
import { creatAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput  from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up.styles.scss';


const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}


const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields;
   

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        //confirm password matches...
        if(password !== confirmPassword){
            alert("Passwords don't match");
        }
        // check if we have authenticated the user
        try{
            const { user }= await creatAuthUserWithEmailAndPassword(email, password);
            console.log("USER OBJECT:",user);
            
            await createUserDocumentFromAuth(user, {displayName});
            
            resetFormFields();
        }catch(error){
            console.log("user email and password creation error",error)
        }
        // create user doc...
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields,[name]:value})
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account ?</h2>
            <span>Sign Up with your E-mail and Password</span>

            <form onSubmit={handleSubmit}>
                 
                 <FormInput label='Display name' type='text' required onChange={handleChange} name='displayName' value={displayName}/>

                 
                 <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />

                 
                 <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />

             
                 <FormInput label='Confirm Password' type='password' required  onChange={handleChange} name='confirmPassword' value={confirmPassword} />

                 <Button buttonType='inverted' type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUp;