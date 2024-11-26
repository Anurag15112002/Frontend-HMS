import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../../main";
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    try {
      const res = await axios.get("https://backend-hms-ikyt.onrender.com/api/v1/user/patient/logout", {
        withCredentials: true,
      });
      toast.success(res.data.message);
      setIsAuthenticated(false);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="navbarContainer">
      <div className="navbarLogo">
      <a href="/">
        <img src="logo.png" alt="logo" className="navbarLogoImg" />
      </a>
      </div>
      <div className={menuOpen ? "navbarLinks navbarShowMenu" : "navbarLinks"}>
        <div className="navbarLinksItems">
          <Link to="/" onClick={() => setMenuOpen(!menuOpen)} style={{ marginLeft: '20px' ,fontSize:'25px'}}>
            Home
          </Link>
          <Link to="/appointment" onClick={() => setMenuOpen(!menuOpen)} style={{ marginLeft: '20px',fontSize:'25px' }}>
            Appointment
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(!menuOpen)} style={{ marginLeft: '20px',fontSize:'25px' }}>
            About Us
          </Link>
          <Link to="/services" onClick={() => setMenuOpen(!menuOpen)} style={{ marginLeft: '20px' ,fontSize:'25px',marginRight:'150px'}}>
            Services
          </Link>
        </div>
        {isAuthenticated ? (
          <button className="navbarLogoutBtn navbarBtn" onClick={handleLogout}>
            LOGOUT
          </button>
        ) : (
          <button className="navbarLoginBtn navbarBtn" onClick={goToLogin}>
            LOGIN
          </button>
        )}
      </div>
      <div className="navbarHamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
