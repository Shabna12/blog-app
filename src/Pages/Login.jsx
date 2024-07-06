import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI } from '../Services/allAPI';


const Login = () => {

  const [userData, setUserData] = useState({
    email:"", password:"" 
  })

  const navigate = useNavigate()

  const handleLogin = async(e) => {
    e.preventDefault()
    if (userData.email && userData.password) {
      try {
        const result = await loginAPI(userData)
        console.log(result);
        if (result.status==200) {
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token)
          setTimeout(() => {
            setUserData({
              email:"", password:""
            })
            navigate('/featuredexplore')
          },2000)
        } else {
          if (result.response.status==404) {
            toast.error(result.response.data)
          }
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.dark("Baabaaa, fill the form 🤦!!")
    }
  }
  
  return (
    <>
      <div className='login-bg'>
        <div className='container mb-5 border shadow rounded p-3 '>
         <h2 className='login-title'>..Welcome Back..</h2>
         <div className='container'>
           <form>
             <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 w-100">
               <Form.Control type="email" placeholder="name@example.com" value={userData.email} onChange={(e) => setUserData({...userData,email:e.target.value})} />
             </FloatingLabel>
             <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" value={userData.password} onChange={(e) => setUserData({...userData,password:e.target.value})} />
             </FloatingLabel>
             <button onClick={handleLogin} type='submit' className='mt-4 btn btn-success'>LOGIN</button>
             <p className='mt-2 login-p'>New User? Click here to <Link to="/register">Register</Link></p>
           </form>
         </div>
        </div>
      </div>
      <ToastContainer position="top-center" theme="colored"/>
    </>
  )
}

export default Login