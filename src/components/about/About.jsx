import React from 'react'
import './about.css'
import ME from '../../assets/Foto-Perfil.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


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
              <small>5+ Clients</small>
            </article>
            
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>

          </div>
            <p>
            Hi! My name is Juan Rosario and I’m a Full-Stack Developer, graduated at Microverse which is a remote software development school that works with pair programming and real-world project to teach development. I have had the opportunity to work on some projects with Html, JavaScript, CSS, ASP.Net, C#, and Flutter (Dart Programming Language).
            </p>
            <p>
            I have more than 14 years of professional experience in the field of Industrial Engineering and during these years I have acquired the skills of teamwork, tight deadlines, personnel management, effective communication, and leadership, which are some of the skills needed to be a successful remote software developer engineer.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
