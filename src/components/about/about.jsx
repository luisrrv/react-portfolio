import React from 'react'
import './about.css'
import ME from '../../assets/me-about-b.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>experience</h5>
              <small>1+ years experience</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>clients</h5>
              <small>many clients</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>projects</h5>
              <small>100 projects</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit cum ullam optio maiores molestias quisquam officia ratione praesentium nobis, tenetur dolor deleniti id alias, modi ipsum eius voluptatibus magnam.</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
