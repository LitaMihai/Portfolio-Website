import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Building </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Maintaining </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Editing and writing content </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className='service'>
          <div className="service__head">
            <h3>Soft Skills</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Good Communicator </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Fast problem solver </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Strong logical and algorithmic thinking </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Dedicated team player </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ability to take decisions on the spot </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Fast learner </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>High degree of independent judgment </p>
            </li>
          </ul>
        </article>
        {/* END OF SOFT SKILLS */}

        <article className='service'>
          <div className="service__head">
            <h3>Software Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Translating ideas into functional code </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Troubleshooting code and fixing bugs </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Playing a role in both the frontend and backend development of the application</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Accepting and giving constructive feedback </p>
            </li>
          </ul>
        </article>
        {/* END OF SOFTWARE AND GAME DEVELOPMENT */}
        
      </div>
    </section>
  )
}

export default Services