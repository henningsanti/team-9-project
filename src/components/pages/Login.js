import React from 'react';
import '../../App.css';
import UserForm from '../UserForm';

function Login({setToken}){
    return (
        <UserForm setToken={setToken} signUp={false}/>
    )
}

export default Login;