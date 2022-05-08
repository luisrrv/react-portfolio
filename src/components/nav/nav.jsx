import React from 'react'
import './nav.css'
// import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {HiOutlineBriefcase} from 'react-icons/hi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header')
  return (
    <nav>
      {/* <a href="#header" onClick={() => setActiveNav ('#header')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome/><p id='nav-text'>Home</p></a> */}
      <a href="#header" onClick={() => setActiveNav ('#header')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineUser/><p id='nav-text'>About</p></a>
      <a href="#experience" onClick={() => setActiveNav ('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/><p id='nav-text'>Skills</p></a>
      <a href="#portfolio" onClick={() => setActiveNav ('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><HiOutlineBriefcase/><p id='nav-text'>Projects</p></a>
      <a href="#contact" onClick={() => setActiveNav ('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/><p id='nav-text'>Contact</p></a>
    </nav>
  )
}

export default Nav
