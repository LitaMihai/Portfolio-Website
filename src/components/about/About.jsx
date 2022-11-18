import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Volunteering</h5>
              <small>Senior volunteer within the association EESTEC LC Bucharest</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>IT</h5>
              <small>Passionate about programming, technology and game development </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>I used and learned several programming languages ​​that I used in projects</small>
            </article>
          </div>
          <p>
          I am in my 3rd year of study at the Faculty of Automatics and Computers at the POLITEHNICA University of Bucharest and I work as a Software Tester at Luxoft. I consider myself a good communicator, fast learner and hard-working person who is extremely motivated to constantly develop my technical skills and grow as a human-being. I pay attention to details, I have great problem-solving abilities and interest in learning every day.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About