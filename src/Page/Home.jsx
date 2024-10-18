import React from 'react'
import image1 from '../images/img1.png'
import image2 from '../images/Rectangle 6.png'
import image3 from '../images/Rectangle 7.png'
import image4 from '../images/img2.png'
import image5 from '../images/Rectangle 12.png'
import image6 from '../images/Rectangle 13.png'
import image7 from '../images/Rectangle 14.png'
import image8 from '../images/client.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
  return (
    <div>
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
        <div className="container pt-5">
            <img src={image1} alt="Networking Image" className='img-fluid' />
            <div className='col-md-10 ps-md-5 lh-md-lg'><p className='lead' id='image1text'>Give your company a faster, more agile way to work with freelancers and contractors. Findcontract and pay yor external workforce in one click, eith 100% compliance.</p></div>
        </div>
        <div className="container ps-md-5 pt-md-5 pe-5 pb-5" id='ThatLot'>
            <h3>That Lot</h3>
            <p className='lead lh-md-sm'>Give your company a faster, more agile way to work with freelancers and contractors. Find contract and pay yor external workforce in one click, eith 100% compliance.</p>
        </div>
        <div className="container">
            <h1 id='nexttext'>Everything you Need To Get Ahead</h1>
            <div className="container d-flex">
            <hr className='hrline'/>
            <hr className='hrline1'/>
            <hr className='hrline2'/>
            <hr className='hrline3'/>
            </div>
        </div>
        <div className="container d-flex mt-5">
            <div className="row">
            <div className="col-md-6"><img src={image2} alt="Network" className='img-fluid' /></div>
            <div className="col-md-6 ps-md-5" id='image2text'>
                <h1>The Fatest Hiring And Payments</h1>
                <p className='lead'>We specialize in delivering cutting-edge IT services tailored to meet the unique needs of businesses across industries. Our expert team is dedicated to providing comprehensive solutions that drive efficiency, enhance security, and foster innovation.</p>
                <ul><li>Manage IT Service</li>
                <li>Cloud Solutions</li>
                <li>CyberSecurity</li>
                <li>IT Consulting</li></ul>
                <a href="#" className='text-dark'>Pay your external workforce in one click</a>
            </div>
            </div>
        </div>
        <div className="container mt-5">
            <div className="row">
            <div className="col-md-6 ps-md-5 order-md-1 order-2" id='image3text'>
                <h1>The Fatest Hiring And Payments</h1>
                <p className='lead'>We specialize in delivering cutting-edge IT services tailored to meet the unique needs of businesses across industries. Our expert team is dedicated to providing comprehensive solutions that drive efficiency, enhance security, and foster innovation.</p>
                <ul><li>Manage IT Service</li>
                <li>Cloud Solutions</li>
                <li>CyberSecurity</li>
                <li>IT Consulting</li></ul>
                <a href="#" className='text-dark'>Pay your external workforce in one click</a>
            </div>
            <div className="col-md-6 order-md-2 order-1"><img src={image3} alt="Network" className='img-fluid' /></div>
            </div>
        </div>
        <div className="container mt-5">
            <div className="row">
            <div className="col-md-6"><img src={image4} alt="Network" className='img-fluid' /></div>
            <div className="col-md-6 ps-md-5" id='image4text'>
                <h1>The Fatest Hiring And Payments</h1>
                <p className='lead'>We specialize in delivering cutting-edge IT services tailored to meet the unique needs of businesses across industries. Our expert team is dedicated to providing comprehensive solutions that drive efficiency, enhance security, and foster innovation.</p>
                <ul><li>Manage IT Service</li>
                <li>Cloud Solutions</li>
                <li>CyberSecurity</li>
                <li>IT Consulting</li></ul>
                <a href="#" className='text-dark'>Pay your external workforce in one click</a>
            </div>
            </div>
        </div>
        <div className="container ps-md-5 pt-md-5 pe-5 pb-5 mt-5" id='ThatLot'>
            <h3>That Lot</h3>
            <p className='lead lh-md-sm'>Give your company a faster, more agile way to work with freelancers and contractors. Find contract and pay yor external workforce in one click, eith 100% compliance.</p>
            <button className='btn btn-dark float-md-end'>Book A Demo</button>
        </div>
        <div className="container-fluid bg-dark ps-md-5 pt-md-5 pt-3 pr-5 pb-5 mt-md-5 mt-3">
            <div className="row">
                <div className="col-md-12">
                <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="d-flex">
        <img src={image5} className="d-block w-33" alt="..."/>
        <img src={image6} className="d-block w-33" alt="..."/>
        <img src={image7} className="d-block w-33" alt="..."/>
      </div>
    </div>
    <div className="carousel-item">
      <div className="d-flex">
        <img src={image5} className="d-block w-33" alt="..."/>
        <img src={image6} className="d-block w-33" alt="..."/>
        <img src={image7} className="d-block w-33" alt="..."/>
      </div>
    </div>
    <div className="carousel-item">
      <div className="d-flex">
        <img src={image5} className="d-block w-33" alt="..."/>
        <img src={image6} className="d-block w-33" alt="..."/>
        <img src={image7} className="d-block w-33" alt="..."/>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 ps-md-5 pt-md-5 pt-3">
                    <h1 className='text-white'>We specialize in delivering cutting-edge IT services tailored to meet the unique needs of businesses across industries. Our expert team is dedicated to providing comprehensive solutions that drive efficiency, enhance security, and foster innovation.
                    </h1>
                    <a href="#" className='text-white'>Pay your External Workforce in just one click</a>
                </div>
            </div>
            <div className="row d-flex justify-content-center p-5">
                <div className="col-md-3">
                    <div className='bg-white d-flex justify-content-center'>
                    <FontAwesomeIcon icon={faGears} style={{fontSize:'100px'}} />
                    </div>
                    <h4 className='text-white text-center pt-2 '>12 Services</h4>
                </div>
                <div className="col-md-3">
                <div className='bg-white d-flex justify-content-center'>
                    <FontAwesomeIcon icon={faDiagramProject} style={{fontSize:'100px'}} />
                    </div>
                    <h4 className='text-white text-center pt-2'>200 + Projects</h4>
                </div>
                <div className="col-md-3">
                <div className='bg-white d-flex justify-content-center'>
                    <FontAwesomeIcon icon={faMoneyCheck } style={{fontSize:'100px'}} />
                    </div>
                    <h4 className='text-white pt-2 '>$200K+Revenue</h4>
                </div>
                <div className="col-md-3">
                <div className='bg-white d-flex justify-content-center'>
                    <FontAwesomeIcon icon={faUser } style={{fontSize:'100px'}} />
                    </div>
                    <h4 className='text-white pt-2'>300+HappyClient</h4>
                </div>
            </div>
        </div>
        <div className="container-fluid">
        <div className="container">
            <h1 id='nexttext'>Donot just take our word for it...</h1>
            <div className="container d-flex">
            <hr className='hrline'/>
            <hr className='hrline1'/>
            <hr className='hrline2'/>
            <hr className='hrline3'/>
            </div>
        </div>
        <div id="carouselExample1" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="container">
            <div className="row d-flex justify-content-between">
                <div className="col-md-3 p-0" style={{backgroundColor:'#C6C5D0'}}>
                    <div className='border-bottom d-flex'>
                        <div className='bg-danger text-center pt-2' style={{width:"50px"}}><FontAwesomeIcon icon={faStar}/></div>
                        <div><h3 className='text-danger text-center'>Review</h3></div>
                    </div>
                    <span className="d-flex align-items-center">
                    <div className='rounded-circle'><img src={image8}  alt="Client-Image"  className='img-fluid'style={{width:'50px',height:'50px'}} /></div>
                        <div className="ms-2">
                           <h6 className="mb-0">John Smith</h6>
                            <p className="lead mb-0" style={{fontSize:'0.7rem'}}>Customer,Agent</p>
                            </div></span>
                    <p className='lead pt-md-5 pt-3 pb-3 ps-2' style={{fontSize:"0.9rem"}}>Give your company a faster, more agile way to work with freelancers and contractors. Find contract and pay yor external workforce in one click, eith 100% compliance.</p>
                </div>
                <div className="col-md-3 p-0" style={{backgroundColor:'#C6C5D0'}}>
                    <div className='border-bottom d-flex'>
                        <div className='bg-success text-center pt-2' style={{width:"50px"}}><FontAwesomeIcon icon={faStar}/></div>
                        <div><h3 className='text-success text-center'>Review</h3></div>
                    </div>
                    <span className="d-flex align-items-center">
                    <div className='rounded-circle'><img src={image8}  alt="Client-Image"  className='img-fluid'style={{width:'50px',height:'50px'}} /></div>
                        <div className="ms-2">
                           <h6 className="mb-0">John Smith</h6>
                            <p className="lead mb-0" style={{fontSize:'0.7rem'}}>Customer,Agent</p>
                            </div></span>
                    <p className='lead pt-md-5 pt-3 pb-3 ps-2' style={{fontSize:"0.9rem"}}>Give your company a faster, more agile way to work with freelancers and contractors. Find contract and pay yor external workforce in one click, eith 100% compliance.</p>
                </div>
                <div className="col-md-3 p-0" style={{backgroundColor:'#C6C5D0'}}>
                    <div className='border-bottom d-flex'>
                        <div className='bg-danger text-center pt-2' style={{width:"50px"}}><FontAwesomeIcon icon={faStar}/></div>
                        <div><h3 className='text-danger text-center'>Review</h3></div>
                    </div>
                    <span className="d-flex align-items-center">
                    <div className='rounded-circle'><img src={image8}  alt="Client-Image"  className='img-fluid'style={{width:'50px',height:'50px'}} /></div>
                        <div className="ms-2">
                           <h6 className="mb-0">John Smith</h6>
                            <p className="lead mb-0" style={{fontSize:'0.7rem'}}>Customer,Agent</p>
                            </div></span>
                    <p className='lead pt-md-5 pt-3 pb-3 ps-2' style={{fontSize:"0.9rem"}}>Give your company a faster, more agile way to work with freelancers and contractors. Find contract and pay yor external workforce in one click, eith 100% compliance.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="carousel-item">
    <div className="container">
            <div className="row d-flex justify-content-between">
                <div className="col-md-3 p-0" style={{backgroundColor:'#C6C5D0'}}>
                    <div className='border-bottom d-flex'>
                        <div className='bg-danger text-center pt-2' style={{width:"50px"}}><FontAwesomeIcon icon={faStar}/></div>
                        <div><h3 className='text-danger text-center'>Review</h3></div>
                    </div>
                    <span className="d-flex align-items-center">
                    <div className='rounded-circle'><img src={image8}  alt="Client-Image"  className='img-fluid'style={{width:'50px',height:'50px'}} /></div>
                        <div className="ms-2">
                           <h6 className="mb-0">John Smith</h6>
                            <p className="lead mb-0" style={{fontSize:'0.7rem'}}>Customer,Agent</p>
                            </div></span>
                    <p className='lead pt-md-5 pt-3 pb-3 ps-2' style={{fontSize:"0.9rem"}}>Give your company a faster, more agile way to work with freelancers and contractors. Find contract and pay yor external workforce in one click, eith 100% compliance.</p>
                </div>
                <div className="col-md-3 p-0" style={{backgroundColor:'#C6C5D0'}}>
                    <div className='border-bottom d-flex'>
                        <div className='bg-success text-center pt-2' style={{width:"50px"}}><FontAwesomeIcon icon={faStar}/></div>
                        <div><h3 className='text-success text-center'>Review</h3></div>
                    </div>
                    <span className="d-flex align-items-center">
                    <div className='rounded-circle'><img src={image8}  alt="Client-Image"  className='img-fluid'style={{width:'50px',height:'50px'}} /></div>
                        <div className="ms-2">
                           <h6 className="mb-0">John Smith</h6>
                            <p className="lead mb-0" style={{fontSize:'0.7rem'}}>Customer,Agent</p>
                            </div></span>
                    <p className='lead pt-md-5 pt-3 pb-3 ps-2' style={{fontSize:"0.9rem"}}>Give your company a faster, more agile way to work with freelancers and contractors. Find contract and pay yor external workforce in one click, eith 100% compliance.</p>
                </div>
                <div className="col-md-3 p-0" style={{backgroundColor:'#C6C5D0'}}>
                    <div className='border-bottom d-flex'>
                        <div className='bg-danger text-center pt-2' style={{width:"50px"}}><FontAwesomeIcon icon={faStar}/></div>
                        <div><h3 className='text-danger text-center'>Review</h3></div>
                    </div>
                    <span className="d-flex align-items-center">
                    <div className='rounded-circle'><img src={image8}  alt="Client-Image"  className='img-fluid'style={{width:'50px',height:'50px'}} /></div>
                        <div className="ms-2">
                           <h6 className="mb-0">John Smith</h6>
                            <p className="lead mb-0" style={{fontSize:'0.7rem'}}>Customer,Agent</p>
                            </div></span>
                    <p className='lead pt-md-5 pt-3 pb-3 ps-2' style={{fontSize:"0.9rem"}}>Give your company a faster, more agile way to work with freelancers and contractors. Find contract and pay yor external workforce in one click, eith 100% compliance.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="carousel-item">
    <div className="container">
            <div className="row d-flex justify-content-between">
                <div className="col-md-3 p-0" style={{backgroundColor:'#C6C5D0'}}>
                    <div className='border-bottom d-flex'>
                        <div className='bg-danger text-center pt-2' style={{width:"50px"}}><FontAwesomeIcon icon={faStar}/></div>
                        <div><h3 className='text-danger text-center'>Review</h3></div>
                    </div>
                    <span className="d-flex align-items-center">
                    <div className='rounded-circle'><img src={image8}  alt="Client-Image"  className='img-fluid'style={{width:'50px',height:'50px'}} /></div>
                        <div className="ms-2">
                           <h6 className="mb-0">John Smith</h6>
                            <p className="lead mb-0" style={{fontSize:'0.7rem'}}>Customer,Agent</p>
                            </div></span>
                    <p className='lead pt-md-5 pt-3 pb-3 ps-2' style={{fontSize:"0.9rem"}}>Give your company a faster, more agile way to work with freelancers and contractors. Find contract and pay yor external workforce in one click, eith 100% compliance.</p>
                </div>
                <div className="col-md-3 p-0" style={{backgroundColor:'#C6C5D0'}}>
                    <div className='border-bottom d-flex'>
                        <div className='bg-success text-center pt-2' style={{width:"50px"}}><FontAwesomeIcon icon={faStar}/></div>
                        <div><h3 className='text-success text-center'>Review</h3></div>
                    </div>
                    <span className="d-flex align-items-center">
                    <div className='rounded-circle'><img src={image8}  alt="Client-Image"  className='img-fluid'style={{width:'50px',height:'50px'}} /></div>
                        <div className="ms-2">
                           <h6 className="mb-0">John Smith</h6>
                            <p className="lead mb-0" style={{fontSize:'0.7rem'}}>Customer,Agent</p>
                            </div></span>
                    <p className='lead pt-md-5 pt-3 pb-3 ps-2' style={{fontSize:"0.9rem"}}>Give your company a faster, more agile way to work with freelancers and contractors. Find contract and pay yor external workforce in one click, eith 100% compliance.</p>
                </div>
                <div className="col-md-3 p-0" style={{backgroundColor:'#C6C5D0'}}>
                    <div className='border-bottom d-flex'>
                        <div className='bg-danger text-center pt-2' style={{width:"50px"}}><FontAwesomeIcon icon={faStar}/></div>
                        <div><h3 className='text-danger text-center'>Review</h3></div>
                    </div>
                    <span className="d-flex align-items-center">
                    <div className='rounded-circle'><img src={image8}  alt="Client-Image"  className='img-fluid'style={{width:'50px',height:'50px'}} /></div>
                        <div className="ms-2">
                           <h6 className="mb-0">John Smith</h6>
                            <p className="lead mb-0" style={{fontSize:'0.7rem'}}>Customer,Agent</p>
                            </div></span>
                    <p className='lead pt-md-5 pt-3 pb-3 ps-2' style={{fontSize:"0.9rem"}}>Give your company a faster, more agile way to work with freelancers and contractors. Find contract and pay yor external workforce in one click, eith 100% compliance.</p>
                </div>
            </div>
        </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample1" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample1" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        <div className="container ps-md-5 pt-md-5 mt-md-5 pe-5 pb-5" id='ThatLot'>
            <h3>That Lot</h3>
            <p className='lead lh-md-sm'>Give your company a faster, more agile way to work with freelancers and contractors. Find contract and pay yor external workforce in one click, eith 100% compliance.</p>
        </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Home