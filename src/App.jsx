import { useContext, useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import HikingGuide from './Pages/HikingGuide'
import Footer from './Components/Footer'
import MyLatestBlog from './Pages/MyLatestBlog'
import AboutMe from './Pages/AboutMe'
import FeaturedExplore from './Pages/FeaturedExplore'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { tokenAuthContext } from './Contexts/AuthContext'

function App() {
  const [count, setCount] = useState(0)
  const {isAuthorised, setIsAuthorised} = useContext(tokenAuthContext)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/login' element={<Login/>}  />
        <Route path='/register' element={<Register/>}  />
        <Route path='/hikingguide' element={<HikingGuide/>}  />
        <Route path='/myblog' element={ <MyLatestBlog/> }  />
        <Route path='/aboutme' element={ <AboutMe/> } />
        <Route path='/featuredexplore' element={isAuthorised?<FeaturedExplore/>:<Navigate to={'/login'} /> }  />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
