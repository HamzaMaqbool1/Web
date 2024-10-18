import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Home from './Page/Home'
import web from './images/web-logo.jpg'
import About from './Page/About'
import Service from './Page/Service'
import Navbar from './Page/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp, faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import WebDevelopment from './Page/WebDevelopment'

function Foter(){
  return(
    <footer>
    <div className="container-fluid bg-dark mt-md-5 mt-3">
    <div className="row">
        <div className="col-md-4 pt-md-5 pt-3 ps-md-5 ps-3"><img className='img-fluid' src={web} alt="" style={{width:"100px"}} /></div>
    </div>
    <div className="row">
        <div className="col-md-3 pt-md-5 pt-3 ps-md-5 ps-3">
            <p className='lead text-wrap text-white'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quibusdam facilis! Harum iusto unde odio quisquam repellendus ex laboriosam vel in optio dicta obcaecati ducimus perspiciatis, dolore soluta illo sit similique dignissimos est, consequatur ad eveniet temporibus ipsa ipsam? Expedita quam maxime ullam doloribus vero praesentium fuga laboriosam natus. Cum?
            </p>
        </div>
        <div className="col-md-3 pt-md-5 pt-3 ps-md-5 ps-3">
            <h3 className='text-white'>Services</h3>
            <Link className='text-decoration-none text-white' to="/web">Web Development</Link><br/>
            <Link className='text-decoration-none text-white'  to="/web">UI/UX Design</Link><br/>
            <Link className='text-decoration-none text-white'  to="/web">Graphic Design</Link><br/>
            <Link className='text-decoration-none text-white'  to="/web">Graphic Design</Link><br/>
            <Link className='text-decoration-none text-white'  to="/web">Business Planning</Link>
        </div>
        <div className="col-md-3 pt-md-5 pt-3 ps-md-5 ps-3">
            <h3 className='text-white'>Useful Links</h3>
            <a className='text-decoration-none text-white' href="#">Lorem</a><br/>
            <a className='text-decoration-none text-white'  href="#">Testinomial</a><br/>
            <a className='text-decoration-none text-white'  href="#">Lorem</a><br/>
            <a className='text-decoration-none text-white'  href="#">Lorem</a><br/>
            <a className='text-decoration-none text-white'  href="#">Lorem</a>
        </div>
        <div className="col-md-3 pt-md-5 pt-3 ps-md-5 ps-3">
            <div className='d-lg-flex d-inline-block'>
              <a href="https://www.facebook.com" target='blank'><FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'blue' }}/></a>
              <a href="https://www.twitter.com" target='blank'><FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: 'rgb(29, 161, 242)'}}/></a>
              <a href="https://www.linkedin.com" target='blank'><FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#0A66C2' }} /></a>
            </div>
            <div className='d-lg-flex d-inline-block' >
            <a href="https://www.whatsapp.com" target='blank'><FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: 'green' }}/></a>
           <a href="https://www.youtube.com" target='blank'><FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: 'red' }}/></a> 
            <a href="https://www.instagram.com" target='blank'><FontAwesomeIcon icon={faInstagram}size="2x" style={{  background: 'linear-gradient(45deg, rgb(193, 53, 132), rgb(245, 96, 64), rgb(252, 175, 69), rgb(131, 58, 180))' }} /></a>
            </div>
        </div>
    </div>
</div>
</footer>
  )
}

function App() {

  return (
    <>
      <Router basename="/Web/">
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/web' element={<WebDevelopment/>}></Route>
        </Routes>
        <Foter/>
      </Router>
    </>
  )
}

export default App