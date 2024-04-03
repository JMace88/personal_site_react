import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';

const NavBar = () => {
  return (
    <header>
      <div>
        <h2 className='logo'>
          <a className='logo-text' href='https://github.com/JMace88' title='My GitHub Profile'>
            JM
          </a>
        </h2>
      </div>
      <nav>
        <button>
          <Link to='/about'>About Me</Link>
        </button>
        <button>
          <Link to='/contact'>Contact Me</Link>
        </button>
        <button>
          <Link to='/portfolio'>My Portfolio</Link>
        </button>
        <button>
          <Link to='/'>Home</Link>
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
