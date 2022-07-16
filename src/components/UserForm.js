import { useRef, useState, useEffect, useContext } from 'react';
//import AuthContext from "../context/AuthProvider";
import { Redirect, Link } from 'react-router-dom';
//import '../App.css';
//import './Section.css';
//import './UserForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import axios from '../api/axios';
const LOGIN_URL = '/login';

const loginUser = async (credentials) => {
    const response = await axios.post(LOGIN_URL, {
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

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    // TODO: Connect to DB, implement signup vs login logic
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = await loginUser({
                username: user,
                password: pwd
            });

            setToken(token);

            //console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            //const accessToken = response?.data?.accessToken;
            //const roles = response?.data?.roles;
            //setAuth({ user, pwd, roles, accessToken });

            //setUser('');
            //setPwd('');
            setSuccess(true);

        } catch (err) {
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
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <Redirect push to="/home"/>
            ) : (
                <div className="container-fluid h-75 d-flex flex-column align-items-center justify-content-center">
                    <h1>{signUp ? "Sign Up" : "Login"}</h1>

                    <form onSubmit={handleSubmit} className="d-flex flex-column">
                        
                        <p 
                            ref={errRef} 
                            align="center"
                            className={"p-2 my-2 justify-content-center text-light " +
                                       "rounded "  +
                                        (errMsg ? "errmsg bg-danger" : "offscreen d-none")} 
                            aria-live="assertive">{errMsg}
                        </p>

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