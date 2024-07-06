import React from 'react'
import Header from '../Components/Header'
import topimg from '../assets/mainimg.png'
import ChooseCategory from '../Components/ChooseCategory'
import f1 from '../assets/feature1.jpg'
import f2 from '../assets/feature2.jpeg'
import f3 from '../assets/feature3.jpg'
import f4 from '../assets/feature4.png'
import f5 from '../assets/feature5.png'
import f6 from '../assets/feature6.png'
import me from '../assets/me-img.avif'
import Card from 'react-bootstrap/Card';
import r1 from '../assets/Rectangle1.png'
import r2 from '../assets/Rectangle2.png'
import r3 from '../assets/Rectangle3.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='head'>
        <img className='header' src={topimg} alt="" />
      </div>
      <Header/>
      {/* title in pic */}
      <div className="container">
        <h1 className='title-pic'>Where will you go next ?</h1>
        <p className='para-pic'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut impedit, molestias eaque eius rem fugit voluptates illum quasi id consectetur facilis ea aliquid sequi unde adipisci incidunt distinctio. Consequuntur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga recusandae voluptatum asperiores repellendus eaque voluptatem sapiente? Dolores vel quam, ad repellendus recusandae nisi, dolor qui vitae voluptatibus necessitatibus officiis molestias</p>
        <h1 className='title2-pic'>Let's Go....</h1>
      </div>
    
      {/* choose a category */}
      <ChooseCategory/>
      <br />
      

      {/* Featured Explore */}
      <div className='container fe-home'>
        <h3 className='mt-5 fe-home-title'>Featured Stories</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
             <Card>
               <Card.Img variant="top" src={r1} />
               <Card.Body>
                 <Card.Title>To Chile , With Love.</Card.Title>
               </Card.Body>
              </Card>
          </div>
          <div className="col-lg-4">
             <Card>
               <Card.Img variant="top" src={r2} />
               <Card.Body>
                 <Card.Title>Inspiring Women I Met in Bhutan and What "Happiness" Means to Them</Card.Title>
               </Card.Body>
              </Card>
          </div>
          <div className="col-lg-4">
             <Card>
               <Card.Img variant="top" src={r3} />
               <Card.Body>
                 <Card.Title>Why You Should Drop Everything and Travel to Iran Now !</Card.Title>
               </Card.Body>
              </Card>
          </div>
        </div>
        <div className='click-home'>
          <Link to="/login"> <p style={{textDecoration:'none', fontSize:'20px'}} >Click Here for More..</p> </Link>
        </div>
      </div >
      
      <br /> <br />
      <hr className='down-line'/>


      {/* Featured On */}
      <div className="container-fluid">
        <h3 className='feature-title'>Featured On</h3>
        <div className="row mt-5">
          <div className="col-sm">
            <img className='ted' width={'180px'} src={f1} alt="" />
          </div>
          <div className="col-sm">
            <img className='bbc' width={'180px'} src={f2} alt="" />
          </div>
          <div className="col-sm">
            <img className='res' width={'180px'} src={f3} alt="" />
          </div>
          <div className="col-sm">
            <img className='nat' width={'180px'} src={f4} alt="" />
          </div>
          <div className="col-sm">
            <img width={'180px'} src={f5} alt="" />
          </div>
          <div className="col-sm">
            <img className='nest' width={'180px'} src={f6} alt="" />
          </div>
        </div>
      </div>
      <br /> <br />

      {/* About me */}
      <div className='me-bg'>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-lg-6">
              <h3 className='me-title'>About Me</h3>
              <p className='me-para'>Hello! I'm Ammalu. In 2019, at age 22, I quit my corporate job with a dream of travelling the globe. Two years later, I packed up my life into a backpack and decided to hit the road indefinitely. I travel slow, seek offbeat and local experiences, stay in a place for a few months or as long as it inspires me, and move on.</p>
              <p className='me-para'>I've done a solo land journey from Thailand to India via Myanmar, and travelled overland from the Persian Gulf via Iran to Armenia. I've lived with a Mayan community in Guatemala, volunteered at a coral reef restoration project in Cuba, lived in a nunnery in Ladakh, and shed my fears and clothes at onsens across Japan. I hope to inspire you to step out of your comfort zone and experience the world - slowly, meaningfully and consciously!</p>
              <Link to={"/aboutme"}> <p style={{textDecoration:'none', color:'white', textAlign:'center'}}> <h6>MORE ABOUT ME</h6> </p> </Link>
            </div>
            <div className="col-lg-6 mb-5">
              <img width={'600px'} className='me-img' src={me} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home