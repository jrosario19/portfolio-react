/* eslint-disable */
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillTwitterSquare} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/juanfranciscorosario/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/jrosario19" target='_blank'><FaGithub/></a>
        <a href="https://twitter.com/jrosario19" target='_blank'><AiFillTwitterSquare/></a>
    </div>
  )
}

export default HeaderSocials
