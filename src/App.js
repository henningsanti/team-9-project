import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import QuoteForm from './components/pages/QuoteForm';
import QuoteHistory from './components/pages/QuoteHistory';
import ClientRegistration from './components/pages/ClientRegistration';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';

function setToken(userToken) {
  localStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

function App() 
{

  const token = getToken();

  return (
    <>
     <Router>
        <Navbar />
            <Switch>
              {/*Public Routes*/}
              <Route path='/' exact component = {Home}/>
              <Route path='/login'>
                <Login setToken={setToken}/>
              </Route>
              <Route path='/signup'>
                <SignUp setToken={setToken}/>
              </Route>

              {/*Private Routes*/}
              {!token ? <Redirect to="/login" /> : <Route path='/quoteform' component = {QuoteForm}/>}
              {!token ? <Redirect to="/login" /> : <Route path='/quotehistory' component = {QuoteHistory}/>}
              {!token ? <Redirect to="/login" /> : <Route path='/clientregistration' component = {ClientRegistration}/>}
            </Switch>
      </Router>
    </>
  );
}

export default App;
