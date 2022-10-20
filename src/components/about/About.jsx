/* eslint-disable */
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
            I am an Industrial Engineer with a Technological MBA.  I am also a Full-stack web developer and problem solver with excellent programming logic. Pair-programming and remote work lover. With more than 14 years of experience in the field of industrial engineering, I have become an expert facing different roles in this professional field. On a given day I could be leading work teams conducting industrial process planning meetings, and setting deadlines and goals. My job requires effective communication skills, leadership, people management, and the discipline to handle details and stick to tight deadlines.

            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
