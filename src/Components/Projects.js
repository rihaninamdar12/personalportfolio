import React from 'react'

function Projects() {
  return (
    <div>
      <section className="projects" id='projects'>
        <div className="heading">
          <h1>Projects</h1>
        </div>
        <div className="project">
          <div className="project-1">
            <h3>1. Weather Application using React Js.</h3>
            <p>A Simple Web Application which gives the current weather according to the cities.This Application is developed using React Js.</p>
            <a href="https://myweathercloud.netlify.app/" target='_blank
            '>https://myweathercloud.netlify.app/</a>
          </div>

          <div className="project-2">
            <h3>2. News Application using React Js.</h3>
            <p>A Web Application which gives us the news with various categories such as general,science,education,technology,health,sports etc.This Application is developed using React Js.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
