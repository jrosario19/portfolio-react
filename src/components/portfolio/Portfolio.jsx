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
}, {
  Id: '2',
  Title: 'Book for movie and tv show',
  Imge: IMG1,
  Github: 'https://github.com/Trictonicmp/js-capstone-project',
  liveLink: 'https://trictonicmp.github.io/js-capstone-project/',
}, {
  Id: '3',
  Title: 'Budget Management System',
  Imge: IMG2,
  Github: 'https://github.com/jrosario19/rails-budget',
  liveLink: 'https://tranquil-mesa-74989.herokuapp.com/',
}, {
  Id: '4',
  Title: 'Vet Appointment Management System',
  Imge: IMG5,
  Github: 'https://github.com/rskinnerc/vet-appointments-rails',
  liveLink: 'https://vet-appointments.deply.cyou/',
}, {
  Id: '5',
  Title: 'Personal Portfolio',
  Imge: IMG4,
  Github: 'https://github.com/jrosario19/portfolio-react',
  liveLink: 'Unavailable',
}, {
  Id: '6',
  Title: 'Math Maggians',
  Imge: IMG3,
  Github: 'https://github.com/jrosario19/math-magicians',
  liveLink: 'https://math-juan-rosario.herokuapp.com/',
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
