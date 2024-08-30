import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Footer.css';

const Footer = () => {
  const hours = [
    { id: 1, day: "Monday", time: "9:00 AM - 11:00 PM" },
    { id: 2, day: "Tuesday", time: "12:00 PM - 12:00 AM" },
    { id: 3, day: "Wednesday", time: "10:00 AM - 10:00 PM" },
    { id: 4, day: "Thursday", time: "9:00 AM - 9:00 PM" },
    { id: 5, day: "Friday", time: "3:00 PM - 9:00 PM" },
    { id: 6, day: "Saturday", time: "9:00 AM - 3:00 PM" },
  ];

  return (
    <>
      <footer className="footerContainer">
        <hr />
        <div className="footerContent">
          <div className="footerLogo">
            <img src="/logo.png" alt="logo" className="footerLogoImg"/>
          </div>
          <div className="footerLinks">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/appointment"}>Appointment</Link></li>
              <li><Link to={"/about"}>About</Link></li>
            </ul>
          </div>
          <div className="footerHours">
            <h4>Day</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="footerContact">
            <h4>Contact</h4>
            <div className="contactItem">
              <FaPhone color="white" />
              <span>999-999-9999</span>
            </div>
            <div className="contactItem">
              <MdEmail color="white" />
              <span>AAAlab@gmail.com</span>
            </div>
            <div className="contactItem">
              <FaLocationArrow color="white" />
              <span>Noida, India</span>
            </div>
          </div>
          <div className="footerSocial">
            <h4>Follow Us</h4>
            <div className="socialLinks">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} color="white" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} color="white" />
              </a>
              <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={30} color="white" />
              </a>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <p>@ 2024 AAA Healthcare. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
