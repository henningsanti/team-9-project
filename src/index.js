import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthProvider} from './context/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, 
    document.getElementById('root')
    
);