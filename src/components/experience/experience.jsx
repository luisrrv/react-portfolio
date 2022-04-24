import React from 'react'
import './experience.css'
import {AiFillHtml5} from "react-icons/ai";
import {DiCss3Full} from "react-icons/di";
import {SiJavascript} from "react-icons/si";
import {BsBootstrapFill} from "react-icons/bs";
import {FaReact} from "react-icons/fa";
import {FaSass} from "react-icons/fa";
import {DiRubyRough} from "react-icons/di";
import {GrGraphQl} from "react-icons/gr";
import {SiPostgresql} from "react-icons/si";
import {SiRubyonrails} from "react-icons/si";
import {SiMongodb} from "react-icons/si";

const Experience = () => {
  return (
    <section id='experience' >
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiCss3Full className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBootstrapFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaSass className='experience__details-icon'/>
              <div>
                <h4>SASS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <DiRubyRough className='experience__details-icon'/>
              <div>
                <h4>Ruby</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <GrGraphQl className='experience__details-icon'/>
              <div>
                <h4>Graphql</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPostgresql className='experience__details-icon'/>
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiRubyonrails className='experience__details-icon'/>
              <div>
                <h4>Rails</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMongodb className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
