import React from 'react';
import '../../App.css';
import UserForm from '../UserForm';

function SignUp({setToken}){
    return (
        <UserForm setToken={setToken} signUp={true}/>
    )
}

export default SignUp;