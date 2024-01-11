import React from 'react';
import './offers.css';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Don't Miss Out!</h1>
        <h1>Exclusive Offers Just for You</h1>
        <p>Discover unbeatable prices on our best sellers. Limited-time offers you can't resist!</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="Exclusive Offer" />
      </div>
    </div>
  );
};

export default Offers;
