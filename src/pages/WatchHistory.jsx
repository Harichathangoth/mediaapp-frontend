import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI'


function WatchHistory() {

  const [history,setHistory]=useState([])

  //make api call 

  const handleHistory = async ()=>{

    const {data} = await getAllHistory()
    setHistory(data)
  }

  //make api call to delete history

  const handleDeleteHistory = async(id)=>{
    await deleteHistory(id)
    // return remaining history
    handleHistory()
  }

  useEffect(()=>{
    handleHistory()
  },[])





  return (
    <>
    <div className='container mt-5 mb-5 d-flex justify-content-between'>
      <h3>Watch History</h3>
      <Link to={'/home'} style={{textDecoration:'none',fontSize:'20px',color:'blueviolet'}}>
      <i class="fa-solid fa-circle-arrow-left fa-beat me-2"></i>Back to Home
      </Link>
    </div>

    <table className='table mt-5 mb-5 container'>
      <thead>
        <tr>
        <th>#</th>
        <th>Name</th>
        <th>URL</th>
        <th>TimeStamp</th>
        <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          history.length>0?history?.map((item,index)=>(
            <tr key={item?.id}>
        <td>{index+1}</td>
        <td>{item.caption}</td>
        <td><a href={item.embedLink} target='_blank'>{item.embedLink}</a></td>
        <td>{item.timestamp}</td>
        <td><button className='btn' onClick={()=>handleDeleteHistory(item?.id)}><i class="fa-solid fa-trash fa-lg"></i></button></td>
        </tr>
          )):<p className='fw-bolder text-danger fs-5'>Nothing to display</p>
        }
      </tbody>
    </table>



    </>
  )
}

export default WatchHistory