import React from 'react'

const SubscribeToday = () => {
  return (
    <>
       <div className="container">
        <div className='border rounded form-color p-4'>
            <h4 className='text-light'>Subscribe Today</h4>
            <p className='text-light mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, ipsam! Minima aut soluta odit eum, totam voluptatem aliquid velit distinctio at corrupti ratione omnis, ad laudantium, voluptatum quia rerum ipsa.</p>
            <form>
                <input type="text" className='form-control w-100'  id='floatingInput' placeholder='Full Name' />
                <div className='mt-2'>
                    <input type="email" name="Email" className='form-control w-100' id="floatingInput" placeholder='Your Email' />
                </div>
                <input type="checkbox" name="agree" id="agree"/>
                <label className='mt-3 ms-3 text-light'>You agree To Our Company Privacy Policy</label> 
            </form>
            <button type='submit' className='mt-3 w-100 sub-btn'>S U B S C R I B E</button>
        </div>
       </div>
    </>
  )
}

export default SubscribeToday