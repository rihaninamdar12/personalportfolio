import React from 'react'
import gmail from '../Images/gmail.png'
import linkedin from '../Images/linkedin.png'
import map from '../Images/map.png'
import whatsapp from '../Images/whatsapp.png'
function Contact(props) {
  return (
    <div>
      <section className="contact" id='contacts'>
        <div className="heading">
          <h1>Contact Me</h1>
        </div>
        <div className="contacts">
          <div className="mail">
            <div><img src={gmail} alt="" /></div>
            <div>{props.mail}</div>
          </div>
          <div className="whatsapp">
            <div><img src={whatsapp} alt="" /></div>
            <div>{props.whatsapp}</div>
          </div>
          <div className="linkedin">
            <div><img src={linkedin} alt="" /></div>
            <div><a href={props.linkedin} target='_blank' rel="noreferrer">{props.linkedin}</a></div>
          </div>
          <div className="map">
            <div><img src={map} alt="" /></div>
            <div>{props.map}</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
