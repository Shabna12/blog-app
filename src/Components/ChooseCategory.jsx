import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import solo from '../assets/solo travel.jpg'
import mountain from '../assets/mountain travel.jpg'
import ocean from '../assets/ocean travel.jpg'

const ChooseCategory = () => {
  return (
    <>
      <div className="container carousel-card">
         <h2 className='text-center choose-title'>Choose A Category</h2>
         <Carousel data-bs-theme="dark">
             <Carousel.Item>
                 <div className='row card1'>
                     <div className='col-4'>
                         <Card className='set1'>
                             <Card.Img variant="top" width={'50px'} height={'175px'} src={solo} />
                             <Card.Body className='back'>
                                 <Card.Title>Solo Travel</Card.Title>
                             </Card.Body>
                         </Card>
                     </div>
                     <div className='col-4 '>
                         <Card className='set1'>
                             <Card.Img variant="top" src={mountain} />
                             <Card.Body className='back'>
                                 <Card.Title>Mountain Travel</Card.Title>
                             </Card.Body>
                         </Card>
                     </div>
                     <div className='col-4 '>
                         <Card className='set1'>
                             <Card.Img variant="top" src={ocean} />
                             <Card.Body className='back'>
                                 <Card.Title>Ocean Travel</Card.Title>
                             </Card.Body>
                         </Card>
                     </div>
                 </div>
             </Carousel.Item>
         </Carousel>
      </div>
    </>
  )
}

export default ChooseCategory