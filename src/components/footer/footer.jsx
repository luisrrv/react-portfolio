import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      {/* <a href="#footer" className="footer__logo">Luis Rodriguez</a> */}

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://github.com"><BsGithub/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Luis Rodriguez. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
