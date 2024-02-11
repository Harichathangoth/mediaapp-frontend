import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Videocard from './VideoCard'
import { getAllVideos } from '../services/allAPI'

function View({uploadedVideoServerResponse}) {

  const [allVideos,setAllVideos]=useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)

  const getAllUploadedVideos = async ()=>{
    const {data} =await getAllVideos()
    setAllVideos(data);
  }

  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoStatus(false)
  },[uploadedVideoServerResponse,deleteVideoStatus])


  console.log(allVideos);

  return (
    <>
    <Row>


      {
        allVideos.length>0?
        allVideos.map(video=>(
          <Col sm={12} md={6} lg={4} xl={3}>
        <Videocard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
      </Col>
        )):<p className='fw-bolder text-danger fs-5'>Nothing to display</p>

      }

    </Row>
    </>
  )
}

export default View