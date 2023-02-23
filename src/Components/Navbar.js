import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import menu_img from '../Images/menu.png'
import close_img from '../Images/close.png'
function Navbar(props) {

  const [close, setClose] = useState('none')
  const [resNav, setresNav] = useState('none')

  const handleMenu = () => {
    setClose('block')
    setresNav('block')
  }

  const handleClose = () => {
    setClose('none')
    setresNav('none')
  }

  return (
    <>
      <header>
        <h2>{props.heading}</h2>

        <div id='navigation'>
          <ul className='navbar' id='navbar'>
            <li><Link smooth={true} to="#home">HOME</Link></li>
            <li><Link smooth={true} to="#about">ABOUT</Link></li>
            <li><Link smooth={true} to="#education">EDUCATION/TECHNICAL SKILLS</Link></li>
            <li><Link smooth={true} to="#projects">PROJECTS</Link></li>
            <li><Link smooth={true} to="#contacts">CONTACT</Link></li>
          </ul>
        </div>

        <button onClick={handleMenu} id="menu"><img src={menu_img} alt="" width={30} /></button>

        <button onClick={handleClose} id="close"><img src={close_img} alt="" width={30} style={{ display: `${close}` }} /></button>

      </header>

      <div id="responsiveNav" style={{width: '100%', height: '200px', display: `${resNav}`}}>
        <ul className='navbar' id='navbar_res'>
          <li><Link smooth={true} to="#home">HOME</Link></li>
          <li><Link smooth={true} to="#about">ABOUT</Link></li>
          <li><Link smooth={true} to="#education">EDUCATION/TECHNICAL SKILLS</Link></li>
          <li><Link smooth={true} to="#projects">PROJECTS</Link></li>
          <li><Link smooth={true} to="#contacts">CONTACT</Link></li>
        </ul>
      </div>

    </>
  )
}

export default Navbar
