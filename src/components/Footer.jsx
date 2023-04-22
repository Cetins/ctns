import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaBlog } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
          <p>cetinsdev@gmail.com</p>
          <span className='social'>
            <button className='social-button'><a href='https://github.com/Cetins'><AiFillGithub className='footerIcons'/></a></button>
            <button className='social-button'><a href='https://www.linkedin.com/in/cetins/'><AiFillLinkedin className='footerIcons'/></a></button>
            <button className='social-button'><a href='https://medium.com/@cetins'><FaBlog className='footerIcons'/></a></button>
          </span>
        </footer>
    );
}

export default Footer;