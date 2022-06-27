import React from 'react';
import '../App.css';
import './Button.css';
import './Section.css';

function Section() {
  return (
    <div className='section-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>We provide your free quote!</h1>
      <p>Contact Team 9</p>
      <div className='section-btns'>
       
      </div>
    </div>
  );
}

export default Section;