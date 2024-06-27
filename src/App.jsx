import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import HikingGuide from './Pages/HikingGuide'
import Footer from './Components/Footer'
import MyLatestBlog from './Pages/MyLatestBlog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        < Route path='/' element={<Home/> } />
        <Route path='/hikingguide' element={<HikingGuide/>}  />
        <Route path='/myblog' element={ <MyLatestBlog/> }  />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
