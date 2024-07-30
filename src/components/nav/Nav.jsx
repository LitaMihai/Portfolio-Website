import React from 'react'
import './nav.css'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {AiOutlineMessage} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import { FaRegFolderOpen } from "react-icons/fa";
import { MdPeopleOutline } from "react-icons/md";
import {RiServiceLine} from "react-icons/ri"
import {useState} from 'react'
import {useScrollPosition} from '../../hooks/useScrollPosition'

const Nav = () => {

    const [activeNav, setActiveNav] = useState('#')
    const sections = ['#', '#about', '#experience', '#services', '#portfolio', '#testimonials', '#contact']
    const scrollPosition = useScrollPosition()
    const BreakException = {};

    // Change the active nav link based on the user's scroll position
    try {
        sections.forEach((section) => {
            let sectionName;

            if (section === '#')
                sectionName = '#';
            else
                sectionName = section.substring(1);

            const element = document.getElementById(sectionName)

            if (element) {
                if (element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    if (activeNav !== section)
                        setActiveNav(section)
                    throw BreakException; // break the loop
                }
            }
        })
    } catch (e) {
        if (e !== BreakException)
            console.log(e)
    }

    // Hide the nav bar when the user scrolls to the footer
    const footer = document.querySelector('footer')

    if (footer) {
        const windowBottom = window.scrollY + window.innerHeight
        const footerBottom = footer.offsetTop + footer.offsetHeight

        if (windowBottom > footer.offsetTop && window.scrollY < footerBottom) {
            document.querySelector('nav').classList.add('hide')
            document.querySelector('nav').classList.remove('show')
        }
        else {
            document.querySelector('nav').classList.remove('hide')
            document.querySelector('nav').classList.add('show')
        }
    }

  return (
      <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
        <a href="#portfolio" onClick={() => setActiveNav('#services')} className={activeNav === '#portfolio' ? 'active' : ''}><FaRegFolderOpen /></a>
        <a href="#testimonials" onClick={() => setActiveNav('#services')} className={activeNav === '#testimonials' ? 'active' : ''}><MdPeopleOutline /></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
      </nav>)
}

export default Nav