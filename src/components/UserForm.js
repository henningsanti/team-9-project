import { useRef, useState, useEffect, useContext } from 'react';
//import AuthContext from "../context/AuthProvider";
import { Redirect, Link } from 'react-router-dom';
//import '../App.css';
//import './Section.css';
//import './UserForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import axios from '../api/axios';

const loginUser = async (credentials, signUp) => {
    const url = signUp ? "/signup" : "/login";
    const response = await axios.post(url, {
            headers: { 'Content-Type': 'application/json' },
            credentials: credentials
            //withCredentials: true
        }
    );

    return response.data;
}

const UserForm = ({signUp, setToken}) => {
    //const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState();

    /*useEffect(() => {
        userRef.current.focus();
    }, [])*/

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    useEffect(() => {
        console.log("Success: " + success);
    }, [success])

    // TODO: Connect to DB, implement signup vs login logic
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = await loginUser({
                username: user,
                password: pwd
            }, signUp);

            if (token.error) {
                setErrMsg(token.error);
            } else {
                console.log(token);
                setToken(token);
                setSuccess(true);
            }

        } catch (err) {
            //setSuccess(false);
            //setToken(false);
            if (!err?.token) {
                console.log(err);
                setErrMsg('No Server Response');
            } else if (err.token?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.token?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
                console.log(err.status)
            }
            //errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <Redirect push to="/clientregistration"/>
            ) : (
                <div className="container-fluid h-75 d-flex flex-column align-items-center justify-content-center">
                    <h1>{signUp ? "Sign Up" : "Login"}</h1>

                    <form onSubmit={handleSubmit} className="d-flex flex-column">
                        
                        <button 
                            ref={errRef} 
                            align="center"
                            className={"p-2 my-2 justify-content-center text-light " +
                                       "rounded "  +
                                        (errMsg ? "errmsg bg-danger" : "offscreen d-none")} 
                            aria-live="assertive"
                            disabled>{errMsg}
                        </button>

                        <div className="form-group my-2">
                            <label>
                                Username:
                                <input
                                    type="text"
                                    className="form-control"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required
                                />
                            </label>
                        </div>
                        
                        <div className="form-group my-2">
                            <label>
                                Password:
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                            />
                            </label>
                        </div>
                        
                        <button 
                            type="submit" 
                            className="w-100 btn btn-success my-2">
                            {signUp ? "Register" : "Log in"}
                        </button>

                            
                        <p className='text-muted my-2'>{(signUp ? "Already " : "Don't ") + "have an account?"}</p>
                        <Link to={signUp ? "/login" : "/signup"} id="register" className="w-100 btn btn-sm btn-secondary">{signUp ? "Log in" : "Register an Account"}</Link>
                        
                    </form>
                </div>
            )}
        </>
    )
}

export default UserForm