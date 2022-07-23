import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Section.css';
import './QuoteForm.css';

function Section() {
  return (
    <div className='section-container'>
      <h1>We provide your free quote!</h1>
      <p>Contact Team 9</p>
      <div className='section-btns'>
       <Button>
        Log In
       </Button>
      </div>
    </div>
  );
}

export default Section;