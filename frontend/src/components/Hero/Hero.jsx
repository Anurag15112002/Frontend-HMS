import React from "react";
import './Hero.css'
const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero">
        <div className="banner">
          <img src="Preview.jpeg" alt="" />
          <div className="text-overlay">
          <h1>Welcome-AAA Healthcare System</h1>
          <p>Efficient Healthcare Management at Your Fingertips</p>
          <p>Enhanced Efficiency and Productivity</p>
          <p>Empowering Healthcare Professionals</p>
          <p>Integrated Patient Care Solutions</p>
          <p>Secure and Compliant</p>
          <p>Support and Training</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;