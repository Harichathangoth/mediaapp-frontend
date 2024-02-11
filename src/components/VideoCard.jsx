import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToHistory, deleteVideos } from '../services/allAPI';


function VideoCard({displayData,setDeleteVideoStatus,insideCategory}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    
    setShow(true);

  //make api call to http://localhost:4000/history

  const {caption,embedLink} = displayData
  let today = new Date()

  let timestamp = new Intl.DateTimeFormat('en-US',{year: 'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)

  let videoDetails ={
    caption,embedLink,timestamp
  }

  await addToHistory(videoDetails)

}





  //delete video 

  const removeVideo = async (id)=>{

    //make api call

    const response = await deleteVideos(id)
    setDeleteVideoStatus(true)
    
  }

  const onDragStarted = (e,id)=>{
    console.log(`ondrag started ...card id ${id}`);
    e.dataTransfer.setData('videoid',id)
    
  }



  return (
    <>
    <Card className='m-3' draggable onDragStart={(e)=>onDragStarted(e,displayData?.id)} style={{ width: '18rem' }}>
      <Card.Img height={'150px'} onClick={handleShow} variant="top" src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>{displayData?.caption}</h6>
        {
          insideCategory?"":<Button onClick={()=>removeVideo(displayData?.id)} className='btn'><i class="fa-solid fa-trash fa-lg"></i></Button>
        }
        </Card.Title>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="526" src={`${displayData?.embedLink}?autoplay=1`}  title={displayData?.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default VideoCard