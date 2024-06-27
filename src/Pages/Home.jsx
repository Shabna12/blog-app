import React from 'react'
import Header from '../Components/Header'
import topimg from '../assets/mainimg.png'
import ChooseCategory from '../Components/ChooseCategory'
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

      {/* Featured Explore */}
    </>
  )
}

export default Home