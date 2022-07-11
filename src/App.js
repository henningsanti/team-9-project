

import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import QuoteForm from './components/pages/QuoteForm';
import QuoteHistory from './components/pages/QuoteHistory';
import ClientRegistration from './components/pages/ClientRegistration';
import SignUp from './components/pages/SignUp';

function App() 
{
  return (
    <>
     <Router>
        <Navbar />
            <Switch>
              <Route path='/' exact component = {Home}/>
              <Route path='/quoteform' component = {QuoteForm}/>
              <Route path='/quotehistory' component = {QuoteHistory}/>
              <Route path='/clientregistration' component = {ClientRegistration}/>
              <Route path='/sign-up' component = {SignUp}/>
            </Switch>
      </Router>
    </>
  );
}

export default App;
