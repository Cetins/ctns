import React, { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegWindowClose } from 'react-icons/fa';

const HamburgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="App">

      {openMenu ? (
        <nav className="nav">
          <button className="hamburger-button" onClick={toggleMenu}><FaRegWindowClose /></button>
          <ul className="nav-ul">
            <li><a className="nav-a" href="/">Home</a></li>
            <li><a className="nav-a" href="/about">About</a></li>
            <li><a className="nav-a" href="/projects">Projects</a></li>
          </ul>
        </nav>
      ) :
        <nav className="nav">
          <button className="hamburger-button" onClick={toggleMenu}><GiHamburgerMenu /></button>
        </nav>
      }
    </div>
  );
}

export default HamburgerMenu;
