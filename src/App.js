import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import QuoteForm from './components/pages/QuoteForm';
import QuoteForm2 from './components/pages/QuoteForm2';
import QuoteHistory from './components/pages/QuoteHistory';
import ClientRegistration from './components/pages/ClientRegistration';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import useToken from './components/useToken';

function App() 
{

  const {token, setToken} = useToken();

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
              {!token ? <Redirect to="/login" /> : <Route path='/quoteform' component = {QuoteForm2}/>}
              {!token ? <Redirect to="/login" /> : <Route path='/quotehistory' component = {QuoteHistory}/>}
              {!token ? <Redirect to="/login" /> : <Route path='/clientregistration' component = {ClientRegistration}/>}
            </Switch>
      </Router>
    </>
  );
}

export default App;
