import React, { useState, useEffect } from 'react';
import './Hero.css';
// import hero_image from '../Assets/hero_image.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/product_4.png';
 
const quotes = [
  "Discover the latest trends and immerse yourself in a world of fashion that transcends boundaries.",
  "Elevate your style with us and experience the epitome of sophistication and elegance.",
  "Fashion that speaks volumes, telling stories of creativity, individuality, and self-expression.",
  "Your one-stop fashion destination, where dreams meet reality and style knows no limits."
];

const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000); // Change the duration as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="hero-left">
        <h2>{quotes[currentQuote]}</h2>
        <div className="hero-latest-button">
          <div>Explore Now</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" style={{ width: '550px'}}/>
      </div>
    </div>
  );
};

export default Hero;
