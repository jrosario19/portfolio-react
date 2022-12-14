/* eslint-disable */
import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Foto-Perfil.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className='career-h5'>Hello I'm</h5>
        <h1>Juan Fco. Rosario Suli</h1>
        <h5 className="text-light career-h5">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" className='profile__photo'/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
