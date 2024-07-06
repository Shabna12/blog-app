import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import pic1 from '../assets/build1.png'
import pic2 from '../assets/girl2.png'
import pic3 from '../assets/bridge3.png'
import pic4 from '../assets/night4.png'
import pic5 from '../assets/train5.png'
import SubscribeToday from '../Components/SubscribeToday';
import PopularPost from '../Components/PopularPost';
import FollowMe from '../Components/FollowMe';

const MyLatestBlog = () => {
  return (
    <>
      <div className='blog-full'>
        {/* nav bar */}
        <div className='hike-nav'>
          <Navbar expand="lg" className='navbar1'>
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-list">
                  <Nav.Link href="/" className='list'>Home</Nav.Link>
                  <Nav.Link href="/aboutme" className='list'>About Me</Nav.Link>
                  <NavDropdown className='list' title="Category" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Solo Travel</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Mount Travel</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Ocean Travel</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown className='list' title="Blog" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/myblog">Personal Travel</NavDropdown.Item>
                    <NavDropdown.Item href="/hikingguide">Mountain Hiking</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/home" className='list'>Contact Me</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="container-fluid ">
          <div>
            <div className='blog-head'>
              <h2 className='blog-head1'> <i className="fa-solid fa-route fa-2xs" style={{color: 'white', fontSize:'50px'}}></i> My Latest Blog</h2>
            </div>
            <div className="row">
              
              {/* main content */}
              <div className="col-lg-8">
                {/* row 1 */}
                <div className="row mb-5">
                  <div className="col-6">
                    <img src={pic1} alt="" />
                  </div>
                  <div className="col-6 mt-3">
                    <h5>13 Things I'd Tell Any New Traveler</h5>
                    <p> <span  className='post'>Post</span> <span className='by'> By </span> <span className='name'> Adam Smith </span>  </p>
                    <p className='date'> 10 Nov,2024 </p>
                    <p className='exp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorem sequi vero sapiente at soluta sint nihil architecto commodi eaque eos culpa autem reiciendis optio delectus, esse suscipit eum dolore?</p>
                  </div>
                </div>
    
                {/* row 2 */}
                <div className="row mb-5">
                  <div className="col-6">
                    <img src={pic2} alt="" />
                  </div>
                  <div className="col-6 mt-3">
                    <h4>13 Things I'd Tell Any New Traveler</h4>
                    <p> <span className='post'>Post</span> <span className='by'> By </span> <span className='name'> Adam Smith </span>  </p>
                    <p className='date'> 10 Nov,2024 </p>
                    <p className='exp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorem sequi vero sapiente at soluta sint nihil architecto commodi eaque eos culpa autem reiciendis optio delectus, esse suscipit eum dolore?</p>
                  </div>
                </div>
    
                {/* row 3 */}
                <div className="row mb-5">
                  <div className="col-6">
                    <img src={pic3} alt="" />
                  </div>
                  <div className="col-6 mt-3">
                    <h4>13 Things I'd Tell Any New Traveler</h4>
                    <p> <span className='post'>Post</span> <span className='by'> By </span> <span className='name'> Adam Smith </span>  </p>
                    <p className='date'> 10 Nov,2024 </p>
                    <p className='exp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorem sequi vero sapiente at soluta sint nihil architecto commodi eaque eos culpa autem reiciendis optio delectus, esse suscipit eum dolore?</p>
                  </div>
                </div>
    
                {/* row 4 */}
                <div className="row mb-5">
                  <div className="col-6">
                    <img src={pic4} alt="" />
                  </div>
                  <div className="col-6 mt-3">
                    <h4>13 Things I'd Tell Any New Traveler</h4>
                    <p> <span className='post'>Post</span> <span className='by'> By </span> <span className='name'> Adam Smith </span>  </p>
                    <p className='date'> 10 Nov,2024 </p>
                    <p className='exp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorem sequi vero sapiente at soluta sint nihil architecto commodi eaque eos culpa autem reiciendis optio delectus, esse suscipit eum dolore?</p>
                  </div>
                </div>
    
                {/* row 5 */}
                <div className="row mb-5">
                  <div className="col-6 ">
                    <img src={pic5} alt="" />
                  </div>
                  <div className="col-6 mt-3">
                    <h4>13 Things I'd Tell Any New Traveler</h4>
                    <p> <span className='post'>Post</span> <span className='by'> By </span> <span className='name'> Adam Smith </span>  </p>
                    <p className='date'> 10 Nov,2024 </p>
                    <p className='exp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorem sequi vero sapiente at soluta sint nihil architecto commodi eaque eos culpa autem reiciendis optio delectus, esse suscipit eum dolore?</p>
                  </div>
                </div>
              </div>
    
              {/* side sections */}
              <div className="col-lg-4">
                <div className="row">
                  <PopularPost/>
                </div>
                <div className="row mt-3">
                  <FollowMe/>
                </div>
                <div className="row mt-3">
                  <SubscribeToday/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyLatestBlog