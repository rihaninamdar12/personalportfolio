import React from 'react'

function EducationTechSkills(props) {
  
  return (
    <div>

      <section className='educationSection' id='education'>
        <div className="heading">
          {/* EducationTechSkills */}
          <h1>EDUCATIONAL AND TECHNICAL SKILLS</h1>
        </div>

        <div className='education_TechSkills'>
          <div className="education">
            <h3>My Educational Background</h3>
            <div className="degree">
              <div><img src={props.education_img} alt="" /></div>
              <div>
                <div>B.E in Computer Engineering</div>
                <p>2017-2022</p>
                <p>CGPI-7.33</p>
              </div>
            </div>
            <div className="degree">

              <div><img src={props.education_img} alt="" /></div>
              <div>
                <div>HSC</div>
                <p>Year Of Passing : 2017</p>
                <p>Score:60.92%</p>
              </div>
            </div>

            <div className="degree">
              <div><img src={props.education_img} alt="" /></div>
              <div>
                <div>SSC</div>
                <p>Year Of Passing : 2015</p>
                <p>Score:83.20%</p>
              </div>
            </div>
          </div>
          <div className="techSkills">
            <h3>Technical Skills</h3>
            <div className='techimg'>
              <div><img src={props.html_img} alt="" /></div>
              <div><img src={props.css_img} alt="" /></div>
              <div><img src={props.js_img} alt="" /></div>
              <div><img src={props.react_img} alt="" /></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EducationTechSkills
