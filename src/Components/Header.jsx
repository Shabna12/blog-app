import React from 'react'
import { Form } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <>
      <div className='container mt-3'>
        <div className="row">
          <div className="col-4 mt-2">
            <h4 className='fw-bolder ms-5 text-light'><span className='text-warning'>Ammuz</span>WORLD</h4>
          </div>
          <div className="col-4">
            {/* search bar */}
            <Form.Control type="text" placeholder="Search your Options" className='search-bar'/>
          </div>
          <div className="col-4">
            {/* social icons */}
            <div className='ms-5 icons mt-2'>
             <a href="" id='top-icon'> <i className="fa-brands fa-facebook-f"></i> </a>
             <a href="" id='top-icon'> <i className="fa-brands fa-x-twitter"></i> </a>
             <a href="" id='top-icon'> <i className="fa-brands fa-instagram"></i> </a>
             <a href="" id='top-icon'> <i className="fa-brands fa-youtube"></i> </a>
            </div>
          </div>
        </div>
        <hr className='head-line'/>
        {/* navbar contents */}
        <Navbar expand="lg" className='navbar1'>
         <Container>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="nav-list">
                <Link to={"/"} style={{textDecoration:'none'}}><Nav.Link href='/' className='list'>Home</Nav.Link> </Link>
                <Link to={"/aboutme"} style={{textDecoration:'none'}}><Nav.Link href='/aboutme' className='list'>About Me</Nav.Link> </Link>
                <NavDropdown className='list' title="Category" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Solo Travel</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Mount Travel</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Ocean Travel</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className='list' title="Blog" id="basic-nav-dropdown">
                  <Link to={"/myblog"}> <NavDropdown.Item href='/myblog'>Personal Travel</NavDropdown.Item> </Link>
                  <Link to={"/hikingguide"}> <NavDropdown.Item href='/hikingguide'>Mountain Hiking</NavDropdown.Item> </Link>
                </NavDropdown>
                <Link to={"/"} style={{textDecoration:'none'}}> <Nav.Link href='/' className='list'>Contact Me</Nav.Link> </Link>
              </Nav>
           </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Header