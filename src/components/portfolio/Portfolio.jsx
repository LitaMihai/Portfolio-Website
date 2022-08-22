import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Club Capybara",
    github: 'https://github.com/LitaMihai/Club-Capybara',
    demo: ''
  },
  {
    id: 2,
    image: IMG2,
    title: "Car Rental Application",
    github: 'https://github.com/LitaMihai/Car_Rental',
    demo: ''
  },
  {
    id: 3,
    image: IMG3,
    title: "Java Calculator",
    github: 'https://github.com/LitaMihai/Java_Calculator',
    demo: ''},
  {
    id: 4,
    image: IMG4,
    title: "Lords of Space",
    github: 'https://github.com/LitaMihai/Lords-of-Space',
    demo: ''
  },
  {
    id: 5,
    image: IMG5,
    title: "Destroy The Enemies",
    github: 'https://github.com/LitaMihai/Destroy_The_Enemies',
    demo: ''
  },
  {
    id: 6,
    image: IMG6,
    title: "Snake Game",
    github: 'https://github.com/LitaMihai/Snake-Game',
    demo: ''
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
    
    <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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