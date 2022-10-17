/* eslint-disable */
import React from 'react'
import './portfolio.css'
import {FaGithub} from 'react-icons/fa'
import IMG1 from '../../assets/Book tv.jpg'
import IMG2 from '../../assets/Budget-App.jpg'
import IMG3 from '../../assets/Mathmagicians.jpg'
import IMG4 from '../../assets/Porfolio-Juan-Rosario.jpg'
import IMG5 from '../../assets/Vet-Appointments.jpg'
import IMG6 from '../../assets/Vote-System.jpg'
const listOfWork = [{
  Id: '1',
  Title: 'National Election System',
  Imge: IMG6,
  Github: 'https://github.com/NeshGogo/Sistema-de-votacion',
  liveLink: 'Unavailable',
  techs: "ASP.Net Core MVC",
  desc:"This is a voting system that is based on the entire process that is carried out during the election of a candidate from a country. This system contains two aspects, one is the administrative part and the second part is the one used by the citizen who is going to vote."
}, {
  Id: '2',
  Title: 'Book for movie and tv show',
  Imge: IMG1,
  Github: 'https://github.com/Trictonicmp/js-capstone-project',
  liveLink: 'https://trictonicmp.github.io/js-capstone-project/',
  techs: "JavaScript",
  desc:"Book tv app to keep track of tv shows, like a show and comment about them!"
}, {
  Id: '3',
  Title: 'Budget Management System',
  Imge: IMG2,
  Github: 'https://github.com/jrosario19/rails-budget',
  liveLink: 'https://tranquil-mesa-74989.herokuapp.com/',
  techs: "Ruby on Rails",
  desc:"A Mobile Web App made with Rails that takes care of your expenses. You can have a record of your expenses by date, category, amount, and others"
}, {
  Id: '4',
  Title: 'Vet Appointment Management System',
  Imge: IMG5,
  Github: 'https://github.com/rskinnerc/vet-appointments-rails',
  liveLink: 'https://vet-appointments.deply.cyou/',
  techs: "Ruby on Rails",
  desc:"This is an app in which you can reserve an appointment with a Veterinarian, create a Doctor, delete a Doctor and show all your appointments. This app was created separating the Fron-End and the Back-End in two repositories"
}, {
  Id: '5',
  Title: 'Personal Portfolio',
  Imge: IMG4,
  Github: 'https://github.com/jrosario19/portfolio-react',
  liveLink: 'Unavailable',
  techs: "React",
  desc:"This is my personal Portfolio. Its purpose is for me to have a document in which I can show to recruiters and hiring managers my professional journey and demonstrate my skills and abilities."
}, {
  Id: '6',
  Title: 'Math Maggians',
  Imge: IMG3,
  Github: 'https://github.com/jrosario19/math-magicians',
  liveLink: 'https://math-juan-rosario.herokuapp.com/',
  techs: "React",
  desc:"Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations and Read a random math-related quote."
}];




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {
        listOfWork.map((item)=>{
          return (
        <article key={item.Id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={item.Imge} alt={item.Title} />
          </div>
          <h3>{item.Title}</h3>
          <p className='paragraph-desc'>{item.desc}</p>
          <p className='project-tech'>{item.techs}</p>
          <div className="portfolio__item-cta">
            <a href={item.Github} className='btn' target='_blank'>Github</a>
            <a href={item.liveLink} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio
