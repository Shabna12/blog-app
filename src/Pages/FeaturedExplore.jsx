import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Card from 'react-bootstrap/Card';
import r1 from '../assets/Rectangle1.png'
import r2 from '../assets/Rectangle2.png'
import r3 from '../assets/Rectangle3.png'
import r4 from '../assets/Rectangle4.png'
import r5 from '../assets/Rectangle5.png'
import r6 from '../assets/Rectangle6.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import blank from '../assets/upload.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContentAPI, allFeContentAPI } from '../Services/allAPI';
import SERVER_URL from '../Services/server_url';

const FeaturedExplore = () => {

  const [preview, setPreview] = useState(blank)

  const [imageFileStatus, setImageFileStatus] = useState(false)

  const [addContents, setAddContents] = useState({
    title:"", description:"", contentImg:""
  })

  const [allContents, setAllContents] = useState([])

  useEffect(() => {
    getAllContents()
  })

  useEffect(() => {
    if (addContents.contentImg.type=="image/png" || addContents.contentImg.type=="image/jpeg" || addContents.contentImg.type=="image/jpg") {
      setImageFileStatus(true)
      setPreview(URL.createObjectURL(addContents.contentImg))
    } else {
      setImageFileStatus(false)
      setPreview(blank)
      setAddContents({...addContents,contentImg:""})
    }
  }, [addContents.contentImg])
  // console.log(addContents);

  //add
  const handleAddContent = async() => {
    const {title, description, contentImg} = addContents
    if (addContents.title && addContents.description && addContents.contentImg) {
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("description",description)
      reqBody.append("contentImg", contentImg)
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        //api test
        try {
          const result = await addContentAPI(reqBody, reqHeader)
          console.log(result);
          if (result.status==200) {
            handleClose()
            toast.dark("Content added !!")
          } else {
            toast.error(result.response.data)
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      toast.error("Form is INCOMPLETE !!")
    }
  }

  //get all contents - display
  const getAllContents = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      }
      //api call
      try {
        const result = await allFeContentAPI(reqHeader)
        // console.log(result);
        if (result.status==200) {
          setAllContents(result.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <div className='fe-bg p-3'>
        <Header/>
        <div className="container">
          <div className='d-flex align-items-center justify-content-between'>
            <h2 className='fe-title'>Featured Stories</h2>
            <button onClick={handleShow} className='add-btn'>+ Add Features</button>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4">
             <Card>
               <Card.Img variant="top" src={r1} />
               <Card.Body>
                 <Card.Title>Card Title</Card.Title>
                 <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
               </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
             <Card>
               <Card.Img variant="top" src={r2} />
               <Card.Body>
                 <Card.Title>Card Title</Card.Title>
                 <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
               </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
             <Card>
               <Card.Img variant="top" src={r3} />
               <Card.Body>
                 <Card.Title>Card Title</Card.Title>
                 <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
               </Card.Body>
              </Card>
            </div>
          </div>

          {/* row 2 */}
          <div className="row mt-5 mb-5">
            <div className="col-lg-4">
             <Card>
               <Card.Img variant="top" src={r4} />
               <Card.Body>
                 <Card.Title>Card Title</Card.Title>
                 <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
               </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
             <Card>
               <Card.Img variant="top" src={r5} />
               <Card.Body>
                 <Card.Title>Card Title</Card.Title>
                 <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
               </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
             <Card>
               <Card.Img variant="top" src={r6} />
               <Card.Body>
                 <Card.Title>Card Title</Card.Title>
                 <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
               </Card.Body>
              </Card>
            </div>
          </div>

          {/* row 3 */}
          <div className="row mt-5 mb-5">
            {
              allContents?.length>0?
              allContents?.map(contents => (
                <div className="col-lg-4" key={contents?._id}>
                  <Card>
                    <Card.Img variant="top" src={`${SERVER_URL}/uploads/${contents?.contentImg}`} />
                    <Card.Body>
                     <Card.Title> {contents?.title} </Card.Title>
                     <Card.Text>
                       {contents?.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
               </div>
              ))
              :
              <div className="fw-bolder text-danger m-5 text-center">YET TO COME...</div>
            }
          </div>
        </div>
      </div>
      
      {/* modal for adding story  */}
      <Modal size='lg' show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title className='fw-bolder'>Add Story</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'sandybrown'}}>
          <div className='row align-items-center'>
            <div className="col-lg-4">
              <label>
                <input type="file" style={{display:'none'}} onChange={(e) => setAddContents({...addContents,contentImg:e.target.files[0]})}/>
                <img height={'100px'} className='img-fluid' src={preview} alt="" />
              </label>
            </div>
            { !imageFileStatus &&  
              <div className='fw-bold text-danger my-2'>*Upload only jpeg,jpg & png</div>
            }
            <div className="col-lg-8">
              <div className="mb-1 mt-1 p-2">
                <input type="text" className='form-control' placeholder='Title' value={addContents.title} onChange={(e) => setAddContents({...addContents,title:e.target.value})} />
              </div>
              <div className="mb-3 mt-2 p-2">
                <textarea type="text" cols={'50'} rows={'5'} className='form-control' placeholder='Description' value={addContents.description}  onChange={(e) => setAddContents({...addContents,description:e.target.value})} />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddContent} variant="success">ADD</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored"/>
    </>
  )
}

export default FeaturedExplore