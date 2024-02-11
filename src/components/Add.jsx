import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function add({setUploadedVideoServerResponse}) {

  const[video,setVideo]=useState({
    id:"",caption:"",url:"",embedLink:""
  })

  const getEmbedLink =(e)=>{
    const {value}=e.target
    if(value){
      const link = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedLink:link})
    }else{
      setVideo({...video,embedLink:""})
    }

  }

  const handleUpload = async()=>{
    const {id,caption,url,embedLink} = video
    if(!id || !caption || !url || !embedLink){
      toast.warning("Please fill missing fileds")
    }else{
      //make api call
      const response = await uploadVideo(video)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success(`${response.data.caption}video uploaded`)

        //set server reponse

        setUploadedVideoServerResponse(response.data)

        //reset video

        setVideo({
          id:"",caption:"",url:"",embedLink:""
        })
        
        //hide modal

        handleClose();
      }else{
        toast.error('Something else wrong')
      }
    }
  }
  



  console.log(video)


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="d-flex align-items-center">
      <h5>Upload Videos</h5>
      <button className='btn mb-2' onClick={handleShow}><i class="fa-solid fa-cloud-arrow-up fa-beat fa-xl"></i></button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Upload</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Fill the following filed</p>
          <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Col sm="10">
          <Form.Control type="text" placeholder="Enter Video Id" onChange={(e)=>setVideo({...video,id:e.target.value})}/>
        </Col>
      </Form.Group>
    </Form>

    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Col sm="10">
          <Form.Control type="text" placeholder="Enter Video Title" onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
        </Col>
      </Form.Group>
    </Form>

    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Col sm="10">
          <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e)=>setVideo({...video,url:e.target.value})}/>
        </Col>
      </Form.Group>
    </Form>

    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Col sm="10">
          <Form.Control type="text" placeholder="Enter Video Link" onChange={getEmbedLink}/>
        </Col>
      </Form.Group>
    </Form>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer

      position='top-center'
      theme='colored'
      autoClose={2000}
      
      />
    </>
  )
}

export default add

//https://www.youtube.com/embed/8_NBwub3gxg?si=SGCobUj4gjq21bm2