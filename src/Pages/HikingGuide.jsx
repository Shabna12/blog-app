import React from 'react'
import picone from '../assets/HG.png'
import pictwo from '../assets/MG.png'
import picthree from '../assets/VG.png'
import blur from '../assets/BG Content.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import side1 from '../assets/1.1.png'
import side2 from '../assets/1.2.png'
import side3 from '../assets/1.3.png'
import { Link } from 'react-router-dom'

const HikingGuide = () => {
  return (
    <>
      <div className="container-fluid">
         {/* head pic */}
         <div className="topper">
             <img className='top1' src={picone} alt="" />
             <img className='top2' src={pictwo} alt="" />
             <img className='top3' src={picthree} alt="" />
             <img className='top4' src={blur} alt="" />
         </div>
         {/* nav bar */}
         <div className='hike-nav'>
             <Navbar expand="lg" className='navbar1'>
                 <Container>
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav">
                         <Nav className="nav-list">
                             <Link to={'/'} style={{textDecoration:'none'}}><Nav.Link href='/' className='list'>Home</Nav.Link></Link>
                             <Link to={'/aboutme'} style={{textDecoration:'none'}}><Nav.Link href='/aboutme' className='list'>About Me</Nav.Link></Link>
                             <NavDropdown className='list' title="Category" id="basic-nav-dropdown">
                                 <NavDropdown.Item href="#action/3.1">Solo Travel</NavDropdown.Item>
                                 <NavDropdown.Item href="#action/3.2">Mount Travel</NavDropdown.Item>
                                 <NavDropdown.Item href="#action/3.3">Ocean Travel</NavDropdown.Item>
                             </NavDropdown>
                             <NavDropdown className='list' title="Blog" id="basic-nav-dropdown">
                                 <Link to={'/myblog'}><NavDropdown.Item href="/myblog">Personal Travel</NavDropdown.Item></Link>
                                 <Link to={'/hikingguide'}><NavDropdown.Item href='/hikingguide'>Mountain Hiking</NavDropdown.Item></Link>
                             </NavDropdown>
                             <Link to={'/'} style={{textDecoration:'none'}}><Nav.Link href='/' className='list'>Contact Me</Nav.Link></Link>
                           </Nav>
                       </Navbar.Collapse>
                  </Container>
              </Navbar>
         </div>
         {/* para on top */}
         <h3 className='heading1'>---------  A HIKING GUIDE</h3>
         <h1 className='heading2'>Be prepared For The Mountains And Beyond !!</h1>
      </div>

      {/* content */}
      <div className='down-body'>
          <div className="container">
             <div className="row  mb-4">
                 <div className="col-6">
                     <p className='title-no'>01</p>
                     <p className='overlay-text'>----  GET STARTED</p>
                     <h1 className='side-head'>What level of hiker are you ?</h1>
                     <p className='brief'>Determine what level of hiker you are can be an importanr tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you - novice, moderate, advanced moderate, expert, or expert backpacker ?</p>
                     <p className='read-more'>read more...</p>
                 </div>
                 <div className="col-6">
                     <img className='photo1' width={'300px'} src={side1} alt="" />
                 </div>
             </div>
             <div className="row mb-4">
                 <div className="col-6">
                     <img className='photo2' width={'300px'} src={side2} alt="" />
                 </div>
                 <div className="col-6">
                     <p className='title-no'>02</p>
                     <p className='overlay-text'>----  HIKING ESSENTIALS</p>
                     <h1 className='side-head'>Picking the right Hiking Gear !</h1>
                     <p className='brief'>The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have. Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.</p>
                     <p className='read-more'>read more...</p>
                 </div>
             </div>
             <div className="row mb-4">
                 <div className="col-6">
                     <p className='title-no'>03</p>
                     <p className='overlay-text'>----  WHERE YOU GO IS THE KEY</p>
                     <h1 className='side-head'>Understand Your Map & Timing </h1>
                     <p className='brief'>To start, print out the hiking guide and map. If it's raining, throw them in a Zip-lock bag. Read over the guide, study the map, and have a good idea of what to expect. I'll read the guide and know that say, in a mile, I make a right turn ar the junction</p>
                     <p className='read-more'>read more...</p>
                 </div>
                 <div className="col-6">
                     <img className='photo3' width={'300px'} src={side3} alt="" />
                 </div>
             </div> <br />
             <div className="row"></div>
          </div>
      </div>
    </>
  )
}

export default HikingGuide