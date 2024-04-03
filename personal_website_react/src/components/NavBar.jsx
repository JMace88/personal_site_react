import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const NavBar = () => {
  return (
    <header>
      <h1>Test Text Nav</h1>
      <div>
        <h2 class='logo'>
          <a href='https://github.com/JMace88'> JM </a>
        </h2>
      </div>
      <nav>
        <Link to='/about'>About Me</Link>
        <Link to='/contact'>Contact Me</Link>
        <Link to='/portfolio'>My Portfolio</Link>
        <Link to='/home'>Home</Link>
      </nav>
    </header>
  );
};

export default NavBar;
