import './App.css';
import About from './Components/About';
import EducationTechSkills from './Components/EducationTechSkills';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Image1 from './Images/Image1.png'
import education_img from './Images/education.png'
import html_img from './Images/html-5.png'
import css_img from './Images/css-3.png'
import js_img from './Images/js.png'
import react_img from './Images/react.png'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Navbar heading="RIHAN INAMDAR" />
        <Routes>
          <Route path='/' element={<><Home greet="HEY THERE !!" name="I AM RIHAN INAMDAR." job_title="Front-End Developer" image1={Image1} />
            <About />
            <EducationTechSkills education_img={education_img} html_img={html_img} css_img={css_img} js_img={js_img} react_img={react_img} />
            <Projects />
            <Contact mail='rihaninamdar12@gmail.com' whatsapp='+91-9594023476' linkedin='https://www.linkedin.com/in/rihan-inamdar-99a926221/' map='Bhandup,Mumbai' />
          </>} />

          <Route path='/home' element={<Home greet="HEY THERE !!" name="I AM RIHAN INAMDAR." job_title="Front-End Developer" image1={Image1} />} />

          <Route path='/about' element={<About />} />

          <Route path='/education' element={<EducationTechSkills education_img={education_img} html_img={html_img} css_img={css_img} js_img={js_img} react_img={react_img} />} />

          <Route path='/projects' element={<Projects />} />

          <Route path='/contacts' element={<Contact mail='rihaninamdar12@gmail.com' whatsapp='+91-9594023476' linkedin='https://www.linkedin.com/in/rihan-inamdar-99a926221/' map='Bhandup,Mumbai' />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;