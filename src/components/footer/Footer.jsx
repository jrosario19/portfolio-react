import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillTwitterSquare} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>JFRS</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Porfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/juanfranciscorosario/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/jrosario19" target='_blank'><FaGithub/></a>
        <a href="https://twitter.com/jrosario19" target='_blank'><AiFillTwitterSquare/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; JFRS All Right Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
