import React from 'react'
import './portfolio.css'
import IMG2 from '../../assets/portfolio2.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.jpeg'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.png'
import IMG9 from '../../assets/portfolio9.jpg'
import IMG10 from '../../assets/portfolio10.jpg'

const data = [
  {
    id: 9,
    image: IMG9,
    title: "Messaging application - cyber security techniques",
    github: 'https://github.com/LitaMihai/Java-Chat',
    demo: 'https://youtu.be/IUroUQ50I1c'
  },
  {
    id: 10,
    image: IMG10,
    title: "Portfolio Website",
    github: 'https://github.com/LitaMihai/Portfolio-Website',
    demo: 'https://litamihai.github.io/Portfolio-Website/'
  },
  {
    id: 8,
    image: IMG8,
    title: "Database administration",
    github: 'https://github.com/LitaMihai/Java-SQL',
    demo: 'https://github.com/LitaMihai/Java-SQL'
  },
  {
    id: 2,
    image: IMG2,
    title: "Car Rental Application",
    github: 'https://github.com/LitaMihai/Car_Rental',
    demo: 'https://github.com/LitaMihai/Car_Rental'
  },
  {
    id: 4,
    image: IMG4,
    title: "Lords of Space",
    github: 'https://github.com/LitaMihai/Lords-of-Space',
    demo: 'https://github.com/LitaMihai/Lords-of-Space'
  },
  {
    id: 5,
    image: IMG5,
    title: "Eat as much as you can",
    github: 'https://github.com/LitaMihai/Eat_as_much_as_you_can',
    demo: 'https://github.com/LitaMihai/Eat_as_much_as_you_can'
  },
  {
    id: 6,
    image: IMG6,
    title: "Destroy The Enemies",
    github: 'https://github.com/LitaMihai/Destroy_The_Enemies',
    demo: 'https://github.com/LitaMihai/Destroy_The_Enemies'
  },
  {
    id: 7,
    image: IMG7,
    title: "Snake Game",
    github: 'https://github.com/LitaMihai/Snake-Game',
    demo: 'https://github.com/LitaMihai/Snake-Game'
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
                <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
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