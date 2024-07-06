import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { registerAPI } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  const [userData, setUserData] = useState({
    username:"", 
    email:"",
    password:""
  })

  const navigate = useNavigate()

  const handleRegister = async(e) => {
    e.preventDefault()
    if (userData.username && userData.email && userData.password) {
      try {
        const result = await registerAPI(userData)
        console.log(result);
        if (result.status==200) {
          toast.info(`Heyy Pal ${result?.data?.username}..Please login to explore my TRAVEL BLOG !!`)
          setUserData({username:"", email:"", password:""})
          navigate('/login')
        } else {
          if (result.response.status==406) {
            toast.error(result.response.data)
            setUserData({username:"", email:"", password:""})
          }
        }
      } catch (err) {
        console.log(err)
      }
    } else {
      toast.error("Fill the form manhh 🤷‍♂️ !!")
    }
  }

  return (
    <>
      <div className='login-bg'>
        <div className='container mb-5 border shadow rounded p-3'>
         <h2 className='login-title'>..Welcome to AmmuzWorld..</h2>
         <div className='container'>
           <form>
             <FloatingLabel controlId="floatingInputName" label="Full Name" className="mb-3 w-100">
                <Form.Control type="text" placeholder="name" value={userData.username} onChange={(e) => setUserData({...userData,username:e.target.value})} />
             </FloatingLabel>
             <FloatingLabel controlId="floatingInputPassword" label="Email address" className="mb-3 w-100">
                <Form.Control type="email" placeholder="name@example.com" value={userData.email} onChange={(e) => setUserData({...userData,email:e.target.value})} />
             </FloatingLabel>
             <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" value={userData.password}  onChange={(e) => setUserData({...userData,password:e.target.value})} />
             </FloatingLabel>
             <button onClick={handleRegister} type='submit' className='mt-4 btn btn-success'>Register</button>
             <p className='mt-2 login-p'>Click here to <Link to="/login">Login</Link></p>
           </form>
         </div>
        </div>
      </div>
      <ToastContainer position="top-center" theme="colored"/>
    </>
  )
}

export default Register