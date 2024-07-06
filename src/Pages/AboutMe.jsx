import React from 'react'
import Header from '../Components/Header'
import girl from '../assets/window-girl.jpg'

const AboutMe = () => {
  return (
    <>
      <div className='bg-color'>
        <Header/>
        <div className="container mt-5">
          <img width={'1100px'} height={'400px'} src={girl} alt="" />
        </div>
        <div className="container mt-5">
          <h2 className='me-title'>Welcome To AmmuzWorld !!</h2>
          <p className='me-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia minima quas, delectus veritatis at sunt ab suscipit quidem doloribus quisquam laboriosam placeat iste officiis ex culpa porro iusto fugiat id?</p>
          <p className='me-para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit.</p>
          <p className='me-para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae minus quam ipsam numquam fugiat amet earum blanditiis omnis iusto, sunt quibusdam molestias, ab neque distinctio itaque possimus dolorem magni cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt amet hic veniam eum quibusdam, aliquid maiores at ratione, temporibus magni quidem harum animi blanditiis eligendi impedit doloremque numquam nobis provident.</p>
          <p className='me-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos voluptas quis eum quos animi unde aut vel beatae. Facere odio harum itaque animi nemo laboriosam inventore perferendis aperiam aut eligendi.</p>
          <h3 className='me-title mt-5'>My Journey</h3>
          <p className='me-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis eveniet accusamus et dolorem quas vel est, laboriosam sed quos alias, ipsa aliquam minus nobis.</p>
          <p className='me-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime id odit quos obcaecati cupiditate eum amet odio dolore eius. Dolorem dolorum quod aperiam vitae hic sunt amet dolores magnam tenetur.</p>
          <p className='me-para mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia fugiat rem aperiam! Nostrum, ex a. Excepturi, blanditiis aut magnam sequi dolores recusandae quam doloremque cumque nostrum exercitationem praesentium veritatis!</p>
        </div>
      </div>
    </>
  )
}

export default AboutMe