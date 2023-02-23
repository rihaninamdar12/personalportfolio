import React from 'react'
import Image2 from '../Images/Image2.png'
function About() {
  return (
    <div>
      <section className="about" id='about'>
        <div className="heading">
          <h1>ABOUT ME</h1>
        </div>
        <div className='about_me'>
          <div id="image">
            <img src={Image2} alt=""/>
          </div>
          <div id='info'>
            <p><em>"I am looking for an entry-level position to kickstart my career in
              IT industry. I wish to work in a dynamic organisation that will
              contribute to my professional and personal growth while I
              contribute to the growth of the company as well as engage in
              opportunities to further the company’s goals."</em>
            </p>
            <div>
              <p>Name : Rihan Inamdar</p>
              <p>Age : 23</p>
              <p>Qualification : B.E in Computer Engineering</p>
              <p>Experience : Fresher</p>
              <p>Language Known : English , Hindi</p>
            </div>
            <button><a href='Resume.pdf' download='Resume.pdf'>Download Resume</a></button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
