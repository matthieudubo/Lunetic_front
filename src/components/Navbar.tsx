import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/LUNETIC.png';
import PositionYContext from '../contexts/PositionY';

const Navbar = () => {
  const { setSpecial } = useContext(PositionYContext);

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="logo-lunetic" />
        </Link>
      </div>
      <div className="navbar__container">
        <div className="navbar__menu">
          <ul>
            <Link to="/" onClick={() => setSpecial(false)}>
              <li>Home</li>
            </Link>
            <Link to="/montures" onClick={() => setSpecial(false)}>
              <li>Montures</li>
            </Link>
            <Link to="/catalogue" onClick={() => setSpecial(true)}>
              <li>Catalogue</li>
            </Link>
            <Link to="/opticians" onClick={() => setSpecial(false)}>
              <li>Opticiens</li>
            </Link>
            <Link to="/concept" onClick={() => setSpecial(false)}>
              <li>Concept</li>
            </Link>
            <Link to="/us" onClick={() => setSpecial(false)}>
              <li>Nous</li>
            </Link>
            <Link to="/find-us" onClick={() => setSpecial(false)}>
              <li>Où nous trouver</li>
            </Link>
            <Link to="/news" onClick={() => setSpecial(false)}>
              <li>News</li>
            </Link>
          </ul>
        </div>
        <div className="navbar__menu-burger">
          <div className="navbar__box">
            <div className="navbar__line" />
            <div className="navbar__middle-line" />
            <div className="navbar__line" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
