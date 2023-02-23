import React from 'react'
import TypewriterComponent from 'typewriter-effect'
function Home(props) {
  return (
    <>
      <section className='home' id='home'>
        <div className='myintro'>
          <div id="main">
            <h3>
              <TypewriterComponent
                options={{
                  strings: [props.greet,"Welcome To My Portfolio !!"],
                  autoStart: true,
                  loop: true
                }} />
            </h3>
            <h1>{props.name}</h1>
            <h4><em>{props.job_title}</em> </h4>
            <button><a href="https://www.linkedin.com/in/rihan-inamdar-99a926221/" target="_blank" rel="noreferrer">Visit My LinkedIn Profile</a></button>
          </div>
          <div className="myimage">
            <img src={props.image1} alt=""/>
          </div>
        </div>
      </section >
    </>
  )
}

export default Home
