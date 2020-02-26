import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/newgame">New Game</Link></li>
        </ul>
    </nav>
  );
}

export default Nav;