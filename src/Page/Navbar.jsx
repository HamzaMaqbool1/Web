import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import image from '../images/web-logo.jpg'

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  // Determine the content based on the route
  const renderHeaderContent = () => {
    switch (pathname) {
      case '/about':
        return (
          <>
            <h1 className='display-1 text-white pt-md-5 pt-3 pb-2 pb-md-3 ps-md-5 fw-bold'>OUR STORY</h1>
            <p className='lead text-white pt-md-3 pt-2 pb-3 ps-md-5 fs-3'>
              Learn more about our mission, vision, and values.
            </p>
          </>
        );
      case '/service':
        return (
          <>
            <h1 className='display-1 text-white pt-md-5 pt-3 ps-md-5 ps-3 fw-bold'>Our Services</h1>
            <p className='lead text-white pt-md-3 pt-2 ps-md-5 ps-3 pb-3 fs-3'>
              Discover the range of services we offer to help your business thrive.
            </p>
          </>
        );
        case '/web':
          return(
            <>
            <h1 className='display-1 text-white pt-md-5 pt-3 ps-md-5 ps-3 fw-bold'>Web Development</h1>
            <p className='lead text-white pt-md-3 pt-2 ps-md-5 ps-3 pb-3 fs-3'>
            Delivering cutting-edge digital solutions tailored to your business needs
            </p>
            </>
          );
      default:
        return (
          <>
            <h1 className='text-white pt-md-5 pt-3 ps-md-5 ps-3 fw-bold'>Empowering Your Business With IT Innovation</h1>
            <p className='lead text-white pt-md-3 pt-2 ps-md-5 ps-3 pb-3 fs-3'>
            We specialize in delivering cutting-edge IT services tailored to meet the unique needs of businesses across industries. Our expert team is dedicated to providing comprehensive solutions that drive efficiency, enhance security, and foster innovation.
            </p>
          </>
        );
    }
  };

  return (
    <section id='header'>
      <div className="container-fluid p-1">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg bg-body-dark">
              <Link className="navbar-brand" to="/home">
                <img id='image' src={image} alt="Logo Image" />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link text-white" aria-current="page" to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/service">Services</Link>
                  </li>
                </ul>
                <button className='btn btn-outline-light ms-auto'>Log-In</button>
                <button className='btn btn-outline-light ms-2'>Sign-Up</button>
              </div>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            {renderHeaderContent()}
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <button className='btn btn-outline-light b1 mt-5'>Book A Demo</button>
            <button className='btn btn-outline-light b2 mt-5'>Request A Quote</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

