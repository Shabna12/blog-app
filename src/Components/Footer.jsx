import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='bg '>
        <div className="container-fluid w-100" >
          <div >
            <div className="row foot-all">
              <div className="col-4 mt-3">
                <p className='ms-3 fs-5'>© 2024 AmmuzWorld All Rights Reserved</p>
              </div>
              <div className="col-4 mt-3 d-flex justify-content-between">
                <Link to={'https://www.linkedin.com/in/shabna-melath-babu-96b063236/'} style={{textDecoration:'none', color:'white'}}>Contacts</Link>
                <Link style={{textDecoration:'none', color:'white'}}>Privacy</Link>
                <Link style={{textDecoration:'none', color:'white'}}>Terms</Link>
                <Link to={'/about'} style={{textDecoration:'none', color:'white'}}>About</Link>
              </div>
              <div className="col-4 mt-4">
                <div className='ms-5'>
                  <a href="https://www.linkedin.com/in/shabna-melath-babu-96b063236/" className='icon1'> <i className="fa-brands fa-facebook-f"></i> </a>
                  <a href="https://www.linkedin.com/in/shabna-melath-babu-96b063236/" className='icon2'> <i className="fa-brands fa-x-twitter"></i> </a>
                  <a href="https://www.linkedin.com/in/shabna-melath-babu-96b063236/" className='icon3'> <i className="fa-brands fa-instagram"></i> </a>
                  <a href="https://www.youtube.com/" className='icon4'> <i className="fa-brands fa-youtube"></i> </a>
                </div>
              </div>
             </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default Footer