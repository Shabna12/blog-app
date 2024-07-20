import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SERVER_URL from '../Services/server_url';
import { updateContentAPI } from '../Services/allAPI';
import { updateResponseContext } from '../Contexts/ContextAPI';



const UpdateContents = ({contents}) => {

  //contextAPI
  const {updateResponse,setUpdateResponse} = useContext(updateResponseContext)

  const [imageFileStatus1, setImageFileStatus1] = useState(true) //update
  const [contentDetails, setContentDetails] = useState({
    id:contents?._id, title:contents?.title, description:contents?.description, contentImg:""
  }) //update
  const [preview1, setPreview1] = useState("") //update

  //update useEffect
  useEffect(() => {
     if (contentDetails.contentImg.type=="image/png" || contentDetails.contentImg.type=="image/jpg" || contentDetails.contentImg.type=="image/jpg") {
         setPreview1(URL.createObjectURL(contentDetails.contentImg))
         setImageFileStatus1(true)
        } else {
          setImageFileStatus1(false)
          setPreview1("")
           setContentDetails({...contentDetails,contentImg:""})
        }
  }, [contentDetails.contentImg])

  //update content
  const handleUpdate = async() => {
    const {id,title,description,contentImg} = contentDetails
    if (title && description) {
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("description",description)
      preview1?reqBody.append("contentImg",contentImg):reqBody.append("contentImg",contents.contentImg)
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": preview1?"multipart/form-data":"application/json",
          "Authorization": `Bearer ${token}`
        }
        try {
          const result = await updateContentAPI(id,reqBody,reqHeader)
          console.log(result);
          if (result.status==200) {
            handleClose1()
            setUpdateResponse(result)
          } else {
            console.log(result.response);
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      toast.error("Please Fill naaa.....")
    }
  }

  //update - modal
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => {
    setShow1(false);
    setContentDetails({id:contents?._id,title:contents?.title,description:contents?.description,contentImg:""})
  };
  const handleShow1 = () => {
    setShow1(true);
    setContentDetails({id:contents?._id,title:contents?.title,description:contents?.description,contentImg:""})
  };

  return (
    <>
      <button onClick={handleShow1} className='btn text-success'> <i className='fa-solid fa-edit'></i>  </button>

      {/* modal for updating */}
      <Modal  size='lg' show={show1} onHide={handleClose1} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title className='fw-bolder'>Update Story..</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'navy'}}>
          <div  className='row align-items-center'>
            <div className="col-lg-4">
              <label>
                <input type="file" style={{display:'none'}} onChange={(e) => setContentDetails({...contentDetails,contentImg:e.target.files[0]})} />
                <img height={'100px'} className='img-fluid' src={preview1?preview1:`${SERVER_URL}/uploads/${contents?.contentImg}`} alt=""  />
              </label>
              { !imageFileStatus1 &&  
                <div className='fw-bold text-danger my-2'>*Upload only jpeg,jpg & png</div>
              }
            </div>
            <div className="col-lg-8">
              <div className="mb-1 mt-1 p-2">
                <input type="text" className='form-control' placeholder='Title' value={contentDetails.title} onChange={(e) => setContentDetails({...contentDetails,title:e.target.value})} />
              </div>
              <div className="mb-3 mt-2 p-2">
                <textarea type="text" cols={'50'} rows={'5'} className='form-control' placeholder='Description' value={contentDetails.description} onChange={(e) => setContentDetails({...contentDetails,description:e.target.value})} />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>Close</Button>
          <Button onClick={handleUpdate} variant="primary">UPDATE</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UpdateContents