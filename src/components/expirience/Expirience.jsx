/* eslint-disable */
import React from 'react'
import './expirience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Expirience = () => {
  return (
    <section id='experience'>
      <h5>What experience I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4>ASP.NET C#</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4>Dart (Flutter)</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4>Ruby on Rails</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4>SQL Server</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4>Postgresql</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expirience
