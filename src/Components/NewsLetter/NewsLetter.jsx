import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Don't Miss Out!</h1>
      <p>Subscribe to our newsletter and get exclusive offers delivered to your inbox.</p>
      <div>
        <input type="email" placeholder='Your Email Id'/> 
        <button>Subscribe Now</button>
      </div>
    </div>
  );
}

export default NewsLetter;
