/* eslint-disable */
import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
import ReactTooltip from "react-tooltip";


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
  <nav>
    <a href="#" data-tip data-for="homeTip" onClick={()=> setActiveNav('#')} className={activeNav === '#'?'active':''}><AiOutlineHome/></a>
    <a href="#about" data-tip data-for="aboutTip" onClick={()=> setActiveNav('#about')} className={activeNav === '#about'?'active':''}><AiOutlineUser/></a>
    <a href="#experience" data-tip data-for="experienceTip" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience'?'active':''}><BiBook/></a>
    <a href="#contact" data-tip data-for="contactTip" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact'?'active':''}><BiMessageSquareDetail/></a>
      <ReactTooltip id="homeTip" place="top" effect="solid" className='tooltip'>
        Home Page
      </ReactTooltip>
      <ReactTooltip id="aboutTip" place="top" effect="solid" className='tooltip'>
        About Page
      </ReactTooltip>
      <ReactTooltip id="experienceTip" place="top" effect="solid" className='tooltip'>
        Skills Page
      </ReactTooltip>
      <ReactTooltip id="contactTip" place="top" effect="solid" className='tooltip'>
        Contact Page
      </ReactTooltip>
  </nav>
  )
}

export default Nav
