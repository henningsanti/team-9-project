

import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import QuoteForm from './components/pages/QuoteForm';
import QuoteHistory from './components/pages/QuoteHistory';
import ClientRegistration from './components/pages/ClientRegistration';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component = {Home}/>
            <Route path='/' exact component = {QuoteForm}/>
            <Route path='/' exact component = {QuoteHistory}/>
            <Route path='/' exact component = {ClientRegistration}/>
            </Switch>
      </Router>
    </>
  );
}

export default App;
