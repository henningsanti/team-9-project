import React, { useRef, useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import '../Section.css';

import axios from './api/axios';
const QUOTE_URL = './list';

const quoteUser = async (credentials) => {
    const response = await axios.post(QUOTE_URL, {
            headers: { 'Content-Type': 'application/json' }
            //credentials: credentials
            //withCredentials: true
        }
    );

    return response.data;
}


const userQuoteForm = ({submitForm}) => {
    //const { setAuth } = useContext(AuthContext);
    //const userRef = useRef();
    //const errRef = useRef();

    const [gallons, setGallons] = useState('');
    const [date, setDate] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setErrMsg('');
    }, [gallons, date])

    useEffect(() => {
        console.log("Success: " + success);
    }, [success])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = await quoteUser({
                gallons: gallons,
                date: date
            });
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            //errRef.current.focus();
        }
    }

    return (
        <div className='section-container'>
            {success ? (
                <section>
                    <h1>Your Quote is in!</h1>
                </section>
            ) : (
                <section>
                    
                    <form onSubmit={handleSubmit}>
                        <p  className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <h1>Sign In</h1>
                        <label htmlFor="gallons" className='form-label'>
                            Gallons:
                        </label>
                        <input
                            type="text"
                            id="gallons"
                            //ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setGallons(e.target.value)}
                            value={gallons}
                            required
                        />

                        <label htmlFor="date" className='form-label'>
                            Date:
                        </label>
                        <input
                            type="date"
                            id="date"
                            onChange={(e) => setDate(e.target.value)}
                            value={date}
                            required
                        />
                        <button className='form-input-btn' type='submit'>Submit</button>
                    </form>
                </section>
            )}
        </div>
    )
}

export default userQuoteForm