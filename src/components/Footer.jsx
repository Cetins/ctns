import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMediumCircle } from 'react-icons/ai';
import { SiMedium } from 'react-icons/si';

const Footer = () => {
    return (
        <footer>
          <p>cetinsdev@gmail.com</p>
          <span className='social'>
            <button className='social-button'><a href='https://github.com/Cetins'><AiFillGithub className='footerIcons'/></a></button>
            <button className='social-button'><a href='https://www.linkedin.com/in/cetins/'><AiFillLinkedin className='footerIcons'/></a></button>
            <button className='social-button'><a href='https://medium.com/@cetins'><SiMedium className='footerIcons'/></a></button>
          </span>
        </footer>
    );
}

export default Footer;