import React from 'react'
import group from '../images/Group 44.png'
import business from '../images/Rectangle 3.png'
import unix from '../images/UIUX.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Service = () => {
  return (
    <section>
      <div className="container-fluid" id='service'>
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
            <h1 id='nexttext1'>Our Offering</h1>
            <div className="container d-flex">
            <hr className='f-hrline'/>
            <hr className='hrline1'/>
            <hr className='hrline2'/>
            <hr className='hrline3'/>
            </div>
        </div>
        <div className="container pt-md-5 pt-3">
          <div className="row">
            <div className="col-lg-4">
            <Link to='/web'><div className="card text-white text-center">
        <img src={business} className="card-img" alt="..." />
        <div className="card-img-overlay d-flex align-items-end p-0 mb-2 pb-1 ps-2 pe-2">
       <div className="card-body w-100 rounded-top" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
        <p className="card-title fs-2">Business Planning</p>
        </div>
       </div>
       </div></Link>
            </div>
            <div className="col-lg-4 mt-md-0 mt-5">
            <Link to='/web'> <div className="card">
              <img src={unix} alt="" style={{height:'94%'}}/>
              </div></Link>
            </div>
            <div className="col-lg-4 mt-md-0 mt-5">
            <Link to='/web'><div className="card">
            <img src={group} alt="" style={{height:'94%'}}/>
              </div></Link>
            </div>
            <div className="col-lg-4 mt-5">
            <Link to='/web'> <div className="card text-white text-center">
        <img src={business} className="card-img" alt="..." />
        <div className="card-img-overlay d-flex align-items-end p-0 mb-2 pb-1 ps-2 pe-2">
       <div className="card-body w-100 rounded-top" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
        <p className="card-title fs-2">Business Planning</p>
        </div>
       </div>
       </div></Link>
            </div>
            <div className="col-lg-4 mt-5">
            <Link to='/web'>  <div className="card">
              <img src={unix} alt="" style={{height:'94%'}}/>
              </div></Link>
            </div>
            <div className="col-lg-4 mt-5">
            <Link to='/web'> <div className="card">
              <img src={group} alt="" style={{height:'94%'}}/>
              </div></Link>
            </div>
            <div className="col-lg-4 mt-5">
            <Link to='/web'> <div className="card text-white text-center">
        <img src={business} className="card-img" alt="..." />
        <div className="card-img-overlay d-flex align-items-end p-0 mb-2 pb-1 ps-2 pe-2">
       <div className="card-body w-100 rounded-top" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
        <p className="card-title fs-2">Business Planning</p>
        </div>
       </div>
       </div></Link>
            </div>
            <div className="col-lg-4 mt-5">
            <Link to='/web'><div className="card">
              <img src={unix} alt="" style={{height:'94%'}}/>
              </div></Link>
            </div>
            <div className="col-lg-4 mt-5">
            <Link to='/web'>  <div className="card">
             <img src={group} alt="" style={{height:'94%'}}/>
              </div></Link>
            </div>
          </div>
        </div>
        <button className='btn text-white fs-3 work' style={{backgroundColor:'#6e4cf4'}}>See Our Work</button>
      </div>
      <div className="container-fluid bg-dark p-0 pt-md-5 pt-3 mt-md-5 mt-3">
      <div className="container ps-md-5 pt-md-5 pe-5 pb-5" id='ThatLot'>
            <h3>That Lot</h3>
            <p className='lead lh-md-sm'>Give your company a faster, more agile way to work with freelancers and contractors. Find contract and pay yor external workforce in one click, eith 100% compliance.</p>
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
    </section>
  )
}

export default Service
