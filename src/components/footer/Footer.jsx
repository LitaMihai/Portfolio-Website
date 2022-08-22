import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Liță Mihai</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/mihailita.mihai/" target='_blank'><FaFacebookF /></a>
        <a href="https://www.instagram.com/mihai._alexandru/" target='_blank'><FiInstagram /></a>
        <a href="https://www.linkedin.com/in/mihai-lita-659909227/" target='_blank'><FaLinkedinIn /></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Liță Mihai. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer