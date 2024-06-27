import React from 'react'
import s1 from '../assets/group1.png'
import s2 from '../assets/cycle2.png'
import s3 from '../assets/tower3.png'
import s4 from '../assets/desert4.png'
import s5 from '../assets/tower5.png'

const PopularPost = () => {
  return (
    <>
      <div className="container">
        <div className="border rounded p-4 bg-light">
            <h4 className='pp0'>Popular Post</h4>
            <div className="row mt-2">
                <div className="col-4">
                    <img src={s1} alt="" />
                </div>
                <div className="col-8">
                    <h6 className='pp-head'>13 Things I'd Tell Any New Traveler</h6>
                    <p className='para1'> <span className='pp1'>Post</span> <span className='pp2'>By</span> <span className='pp3'>Adam Smith</span> </p>
                    <p className='pp4'> 10 Nov, 2024 </p>
               </div>
            </div>
            {/* row 2 */}
            <div className="row">
                <div className="col-4">
                    <img src={s2} alt="" />
                </div>
                <div className="col-8">
                    <h6 className='pp-head'>5 Things I'd Tell Any New Traveler</h6>
                    <p className='para1'> <span className='pp1'>Post</span> <span className='pp2'>By</span> <span className='pp3'>Adam Smith</span> </p>
                    <p className='pp4'> 10 Nov, 2024 </p>
               </div>
            </div>
            {/* row 3 */}
            <div className="row">
                <div className="col-4">
                    <img src={s3} alt="" />
                </div>
                <div className="col-8">
                    <h6 className='pp-head'>15 Things I'd Tell Any New Traveler</h6>
                    <p className='para1'> <span className='pp1'>Post</span> <span className='pp2'>By</span> <span className='pp3'>Adam Smith</span> </p>
                    <p className='pp4'> 10 Nov, 2024 </p>
               </div>
            </div>
            {/* row 4 */}
            <div className="row">
                <div className="col-4">
                    <img src={s4} alt="" />
                </div>
                <div className="col-8">
                    <h6 className='pp-head'>6 Things I'd Tell Any New Traveler</h6>
                    <p className='para1'> <span className='pp1'>Post</span> <span className='pp2'>By</span> <span className='pp3'>Adam Smith</span> </p>
                    <p className='pp4'> 10 Nov, 2024 </p>
               </div>
            </div>
            {/* row 5 */}
            <div className="row">
                <div className="col-4">
                    <img src={s5} alt="" />
                </div>
                <div className="col-8">
                    <h6 className='pp-head'>12 Things I'd Tell Any New Traveler</h6>
                    <p className='para1'> <span className='pp1'>Post</span> <span className='pp2'>By</span> <span className='pp3'>Adam Smith</span> </p>
                    <p className='pp4'> 10 Nov, 2024 </p>
               </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default PopularPost