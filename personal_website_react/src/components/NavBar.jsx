import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css'

const NavBar = () => {
  return (
    <header>
      <div>
        <h2 className='logo'>
          <a href='https://github.com/JMace88'> JM </a>
        </h2>
      </div>
      <nav>
        <Link to='/about'>About Me</Link>
        <Link to='/contact'>Contact Me</Link>
        <Link to='/portfolio'>My Portfolio</Link>
        <Link to='/'>Home</Link>
      </nav>
    </header>
  );
};

export default NavBar;
