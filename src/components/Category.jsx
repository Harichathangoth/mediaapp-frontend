import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, FormLabel, Modal, Row, ToastContainer } from 'react-bootstrap';
import { toast, useToastContainer } from 'react-toastify';
import { addTocategories, deletecategories, getAVideos, getAllcategories, updateCategories } from '../services/allAPI';
import VideoCard from './VideoCard';




function Category() {

  const [allCategories,setAllCategories]=useState([])
  const [categoryName,setCategoryName] =useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getCategories = async ()=>{
    const {data} = await getAllcategories()
    setAllCategories(data)
  }

  console.log(allCategories)

  

  const handleAddCategory = async ()=>{
    if(categoryName){

      let body={
        categoryName,allVideos:[]
      }
      //make api call

      const response = await addTocategories(body)
      console.log(response)

      if(response.status>=200 &&  response.status<300){
        //hide modal
        handleClose()

        //reset state
        setCategoryName('')

      }else{
        toast.error("Something Went Wrong")
      }

    }else{
      toast.warning("Provide Category Name")
    }
  }

  useEffect(()=>{
    getCategories()
  },[])

  const handleDelete = async(id)=>{
    await deletecategories(id)
    getCategories()
  }

  const dragOver = (e)=>{
    console.log("Video drag over Category")
    e.preventDefault()
    
  }

  const videoDrop = async (e,CategoryId)=>{
    console.log("video drop inside category id :",CategoryId);
    const videoId = e.dataTransfer.getData("videoId")
    //get Video Details
    const{data} = await getAVideos(videoId)
    console.log(data)
    //get category details

    const selectedCategory = allCategories?.find(item=>item.id===CategoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);

    //make api call to get update categories

    await updateCategories(CategoryId,selectedCategory)
    getCategories()
  }


  return (
    <>
    <div className="d-grid ms-3">
      <button className='btn btn-info' onClick={handleShow}>Add to Category</button>
    </div>

    {
      allCategories?allCategories?.map(item=>(
        <div className='mt-5 mb-3 border rounded p-3' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
          <div className='d-flex justify-content-between align-items-center'>
            <h6>{item?.categoryName}</h6>
            <button className='btn' onClick={()=>handleDelete(item?.id)}><i class="fa-solid fa-trash fa-lg"></i></button>
          </div>

          <Row>
            {
              item?.allVideos &&
              item?.allVideos.map(
                Card=>(
                  <Col sm={12}>
                    <VideoCard displayData={Card} insideCategory={true}/>
                  </Col>
                )
              )
            }

          </Row>

        </div>
      )):<p className='fw-bolder text-danger fs-5'>Nothing to display</p>


      }

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
          


          <Form>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <FormLabel>Enter Video Name</FormLabel>
        <Col sm="10">
          <Form.Control type="text" placeholder="Enter Video Name" onChange={(e)=>setCategoryName(e.target.value)} />
        </Col>
      </Form.Group>
    </Form>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Upload</Button>
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

export default Category