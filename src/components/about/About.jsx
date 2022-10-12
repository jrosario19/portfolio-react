/* stylelint-disable */
import React from 'react';
import './about.css';
import ME from '../../assets/Foto-Perfil.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';


const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Clients</small>
            </article>
            
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>

          </div>
            <p>
            I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, 
                don't hestiate to contact me.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
