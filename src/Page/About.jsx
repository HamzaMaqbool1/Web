import React, { useEffect,useState } from 'react'
import employe from '../images/Rectangle 55.png'
import mission from '../images/mission.jpg'
import goal from '../images/Goal.jpg'
import ar from '../images/ar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin,faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
const About = () => {
    const [slide, setSlide] = useState(0);
  const cardCount = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(prev => (prev === cardCount - 1 ? 0 : prev + 1));
    }, 10000); 
    return () => clearInterval(interval);
  }, [cardCount]);
  return (
    <section>
      <div className="container-fluid">
        <div className="container bg-light border-light-subtle">
            <div className="row">
                <div id='github' className="col pt-3 pb-3">GitHub</div>
                <div id='github' className="col pt-3 pb-3">GitHub</div>
                <div id='github' className="col pt-3 pb-3">GitHub</div>
                <div id='github' className="col pt-3 pb-3">GitHub</div>
                <div id='github' className="col pt-3 pb-3">GitHub</div>
            </div>
        </div>
        <div className="container">
            <h1 id='nexttext1'>Welcome</h1>
            <div className="container d-flex">
            <hr className='f-hrline'/>
            <hr className='hrline1'/>
            <hr className='hrline2'/>
            <hr className='hrline3'/>
            </div>
        </div>
        <div className="container pt-md-5 pt-3 ps-md-5 ps-3 pb-md-5 pb-3">
            <p className="lead fw-bold" style={{fontSize:'1rem'}}>
            background or why we start a company ...Lorem ipsum dolor sit amet consectetur. Pulvinar scelerisque purus suscipit cursus vestibulum nibh proin neque. Sed neque cursus congue ultrices enim donec in. Diam pretium odio tortor amet amet molestie enim aliquam massa vitae.Lorem ipsum dolor sit amet consectetur. Pulvinar scelerisque purus suscipit cursus vestibulum nibh proin neque. Sed neque cursus congue ultrices enim donec in. Diam pretium odio tortor amet amet molestie enim aliquam massa vitae.
            </p>
        </div>
        <div className="container">
            <h1 id='nexttext1'>Our Team</h1>
            <div className="container d-flex">
            <hr className='f-hrline'/>
            <hr className='hrline1'/>
            <hr className='hrline2'/>
            <hr className='hrline3'/>
            </div>
        </div>
        <div className="container pt-md-5 pt-3">
      <div className="card-slider">
        <div className="card-slide" style={{ transform: `translateX(-${slide * 100}%)` }}>
          <div className="card bg-dark">
            <img src={employe} className="card-img-top" alt="John Carter" />
            <div className="card-body ">
              <h5 className="card-title text-center text-white">William Smith</h5>
              <p className="card-text text-center text-white">Junior Developer</p>
              <div className='d-flex justify-content-center gap-2'>
                <a href="#"><FontAwesomeIcon icon={faFacebook} size='2x' /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} size='2x' /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} size='2x' /></a>
              </div>
            </div>
          </div>
          <div className="card bg-dark">
            <img src={employe} className="card-img-top" alt="John Carter" />
            <div className="card-body">
              <h5 className="card-title text-center text-white">John Carter</h5>
              <p className="card-text text-center text-white">HR Manager</p>
              <div className='d-flex justify-content-center gap-2'>
                <a href="#"><FontAwesomeIcon icon={faFacebook} size='2x' /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} size='2x' /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} size='2x' /></a>
              </div>
            </div>
          </div>
          <div className="card bg-dark">
            <img src={employe} className="card-img-top" alt="John Carter" />
            <div className="card-body ">
              <h5 className="card-title text-center text-white">Seveston Newton</h5>
              <p className="card-text text-center text-white">Senior Developer</p>
              <div className='d-flex justify-content-center gap-2'>
                <a href="#"><FontAwesomeIcon icon={faFacebook} size='2x' /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} size='2x' /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} size='2x' /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      <div className="container-fluid pt-5 " id='mission'>
        <div className="row">
            <div className="col-md-6">
                <img src={mission} alt="Mission-imsge" className='img-fluid'  />
            </div>
            <div className="col-md-6">
            <div className="container">
            <h1 id='nexttext2'>Our Mission</h1>
            <div className="container d-flex">
            <hr className='s-hrline'/>
            <hr className='hrline1'/>
            <hr className='hrline2'/>
            <hr className='hrline3'/>
            </div>
            </div>
            <p className='lead fs-6 fw-semibold mt-md-5'>Lorem ipsum dolor sit amet consectetur. At leo ornare sagittis volutpat feugiat volutpat nisl bibendum. Ac faucibus enim justo tellus bibendum venenatis vel. Elementum pellentesque dictum viverra tempor. Odio pellentesque viverra fringilla eleifend laoreet commodo odio elementum et. Massa a quis facilisi morbi at sit consequat. Feugiat gravida justo massa et hac. Varius sed orci tortor et nibh. Pretium leo donec tortor nibh non pretium fringilla arcu. Nunc quis velit lacus sit.</p>
            </div>
        </div>
      </div>
      <div className="container-fluid pt-5 pb-5" id='Goal'>
        <div className="row">
        <div className="col-md-6">
            <div className="container">
            <h1 id='nexttext2'>Our Goal</h1>
            <div className="container d-flex">
            <hr className='s-hrline'/>
            <hr className='hrline1'/>
            <hr className='hrline2'/>
            <hr className='hrline3'/>
            </div>
            </div>
            <p className='lead fs-6 fw-semibold mt-md-5'>Lorem ipsum dolor sit amet consectetur. At leo ornare sagittis volutpat feugiat volutpat nisl bibendum. Ac faucibus enim justo tellus bibendum venenatis vel. Elementum pellentesque dictum viverra tempor. Odio pellentesque viverra fringilla eleifend laoreet commodo odio elementum et. Massa a quis facilisi morbi at sit consequat. Feugiat gravida justo massa et hac. Varius sed orci tortor et nibh. Pretium leo donec tortor nibh non pretium fringilla arcu. Nunc quis velit lacus sit.</p>
            </div>
            <div className="col-md-6">
                <img src={goal} alt="Goal-imsge" className='img-fluid'/>
            </div>
        </div>
      </div>
      <div className="container-fluid bg-dark">
        <div className="row">
            <div className="col-md-12">
            <div className="container">
            <h1 id='nexttext3' className='text-white'>Why You Choose Us</h1>
            <div className="container d-flex">
            <hr className='Thrline'/>
            <hr className='hrline1'/>
            <hr className='hrline2'/>
            <hr className='hrline3'/>
            </div>
        </div>
            </div>
        </div>
        <div className="row d-flex justify-content-around pb-5 pt-5">
            <div className="col-md-3 bg-white">
                <h6 className='lh-2 text-center  fw-bold'>Customer-Centric Approach</h6>
                <p>Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.</p>
            </div>
            <div className="col-md-3 bg-white ">
                <h6 className='lh-2 text-center fw-bold'>Innovation</h6>
                <p>Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.</p>
            </div>
            <div className="col-md-3 bg-white ">
                <h6 className='lh-2 text-center fw-bold'>Reliability</h6>
                <p>Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.</p>
            </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
            <div className="container">
            <h1 id='nexttext4'>Testinomial's</h1>
            <div className="container d-flex">
            <hr className='F-hrline'/>
            <hr className='hrline1'/>
            <hr className='hrline2'/>
            <hr className='hrline3'/>
            </div>
        </div>
            </div>
        </div>
        <div className="row pt-5 d-flex justify-content-center">
            <div id="carouselExampleIndicators" className="carousel slide" style={{width:'60%',textAlign:'center', margin: '0 auto',paddingBottom: '50px',paddingLeft:'70px',paddingRight:'50px', overflowY:'hidden'}}>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="container border rounded border-dark" style={{backgroundColor:'rgb(245, 245, 245)'}}>
                <span className="d-flex align-items-center">
                     <div className='rounded-circle'><img src={ar}  alt="Client-Image"  className='img-fluid'style={{width:'50px',height:'50px'}} /></div>
                        <div className="ms-2">
                           <h6 className="mb-0">Social Swril</h6>
                            </div></span>
                        <p className='lead ps-md-5 pt-3 pb-md-3'>Lorem ipsum dolor sit amet consectetur. Felis lacus at habitasse ut quis semper. Sit lectus nibh arcu risus scelerisque neque. At at eget id laoreet sed diam orci. Orci turpis magna mauris elit aliquam id arcu viverra.Orci vulputate tellus tincidunt nullam etiam. Ut morbi id elementum quam.</p>
                </div>
    </div>
    <div className="carousel-item">
    <div className="container border rounded border-dark" style={{backgroundColor:'rgb(245, 245, 245)'}}>
                <span className="d-flex align-items-center">
                     <div className='rounded-circle'><img src={ar}  alt="Client-Image"  className='img-fluid'style={{width:'50px',height:'50px'}} /></div>
                        <div className="ms-2">
                           <h6 className="mb-0">Social Swril</h6>
                            </div></span>
                        <p className='lead ps-md-5 pt-3 pb-md-3'>Lorem ipsum dolor sit amet consectetur. Felis lacus at habitasse ut quis semper. Sit lectus nibh arcu risus scelerisque neque. At at eget id laoreet sed diam orci. Orci turpis magna mauris elit aliquam id arcu viverra.Orci vulputate tellus tincidunt nullam etiam. Ut morbi id elementum quam.</p>
                </div>
    </div>
    <div className="carousel-item">
    <div className="container border rounded border-dark" style={{backgroundColor:'rgb(245, 245, 245)'}}>
                <span className="d-flex align-items-center">
                     <div className='rounded-circle'><img src={ar}  alt="Client-Image"  className='img-fluid'style={{width:'50px',height:'50px'}} /></div>
                        <div className="ms-2">
                           <h6 className="mb-0">Social Swirl</h6>
                            </div></span>
                        <p className='lead ps-md-5 pt-3 pb-md-3'>Lorem ipsum dolor sit amet consectetur. Felis lacus at habitasse ut quis semper. Sit lectus nibh arcu risus scelerisque neque. At at eget id laoreet sed diam orci. Orci turpis magna mauris elit aliquam id arcu viverra.Orci vulputate tellus tincidunt nullam etiam. Ut morbi id elementum quam.</p>
                </div>
    </div>
    <div className="carousel-item">
    <div className="container border rounded border-dark" style={{backgroundColor:'rgb(245, 245, 245)'}}>
                <span className="d-flex align-items-center">
                     <div className='rounded-circle'><img src={ar}  alt="Client-Image"  className='img-fluid'style={{width:'50px',height:'50px'}} /></div>
                        <div className="ms-2">
                           <h6 className="mb-0">Social Swril</h6>
                            </div></span>
                        <p className='lead ps-md-5 pt-3 pb-md-3'>Lorem ipsum dolor sit amet consectetur. Felis lacus at habitasse ut quis semper. Sit lectus nibh arcu risus scelerisque neque. At at eget id laoreet sed diam orci. Orci turpis magna mauris elit aliquam id arcu viverra.Orci vulputate tellus tincidunt nullam etiam. Ut morbi id elementum quam.</p>
                </div>
    </div>
    <div className="carousel-item">
    <div className="container border rounded border-dark" style={{backgroundColor:'rgb(245, 245, 245)'}}>
                <span className="d-flex align-items-center">
                     <div className='rounded-circle'><img src={ar}  alt="Client-Image"  className='img-fluid'style={{width:'50px',height:'50px'}} /></div>
                        <div className="ms-2">
                           <h6 className="mb-0">Social Swril</h6>
                            </div></span>
                        <p className='lead ps-md-5 pt-3 pb-md-3'>Lorem ipsum dolor sit amet consectetur. Felis lacus at habitasse ut quis semper. Sit lectus nibh arcu risus scelerisque neque. At at eget id laoreet sed diam orci. Orci turpis magna mauris elit aliquam id arcu viverra.Orci vulputate tellus tincidunt nullam etiam. Ut morbi id elementum quam.</p>
                </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '0px', transform: 'translateY(-50%)', zIndex: '2' }}></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" style={{ position: 'absolute', top: '50%', right: '0px', transform: 'translateY(-50%)', zIndex: '2' }}></span>
    <span className="visually-hidden">Next</span>
  </button>

  <div className="carousel-indicators" style={{bottom: '-20px'}}> 
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="bg-dark" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="bg-dark" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className="bg-dark" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className="bg-dark" aria-label="Slide 3"></button>
  </div>
</div>
            
        </div>
      </div>
    </section>
  )
}

export default About
