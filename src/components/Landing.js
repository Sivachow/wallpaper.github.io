import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import sampleImage from './landing-banner.png'; // Replace with your image file

const Landing = () => {
  return (
    <div className="hero-container">
      <div className="text-container">
        <h1>Generate Wallpapers with a click of a button</h1>
        <p>Save time by generating Wallpapers for your phone, mobile, laptop using our AI digital wallpaper generator.</p>
        <Link to="/generate"><button className="cta-btn">Get Started</button></Link>
      </div>
      <div className="image-container">
        <img src={sampleImage} alt="Landing banner" />
      </div>
    </div>
  );
};

export default Landing;
