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
              <small>2 large projects and 4+ small projects</small>
            </article>
          </div>
          <p>
          I am a passionate student of programming, I am looking to deepen my knowledge about programming
languages, multi-threading, and inter-process communication. I learned a lot working on personal
projects but I am willing to learn something from as many fields as possible.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About