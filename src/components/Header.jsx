import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll'; 
import './header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo-circle">
          Sho<span>biya</span>
        </div>

        {/* Nav Links */}
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}           
              smooth={true}
              duration={800}
              offset={-70}          
              className="nav-link"
              activeClass="active"
              spy={true}            
              onClick={closeMenu}
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>

        {/* Menu Toggle Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;