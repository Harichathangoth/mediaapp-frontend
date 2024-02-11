


import {commonAPI} from "./Cmapi"
import { serverUrl } from "./serverUrl"


//upload video

export const uploadVideo =async(reqBody)=>{
    //make Post http request  "http://localhost:4000/videos" to add videos to the json-server return response to the add component

    return await commonAPI("POST",`${serverUrl}/videos`,reqBody)
}

//get all videos from json

export const getAllVideos = async()=>{

    //make Get http request  "http://localhost:4000/videos" to get all videos to the json-server return response to the add component

    return await commonAPI("GET",`${serverUrl}/videos`,"")
}


//get a videos from json

export const getAVideos = async(id)=>{

    //make Get http request  "http://localhost:4000/videos" to get all videos to the json-server return response to the add component

    return await commonAPI("GET",`${serverUrl}/videos/${id}`,"")
}

//delete a videos from json

export const deleteVideos = async(id)=>{

    //make Get http request  "http://localhost:4000/videos" to get all videos to the json-server return response to the add component

    return await commonAPI("DELETE",`${serverUrl}/videos/${id}`,{})
}



//Store watch history to json server

export const addToHistory =async(videoDetails)=>{
    //make Post http request  "http://localhost:4000/history" to store videos history details to the json-server return response to the videocard commponents

    return await commonAPI("POST",`${serverUrl}/history`,videoDetails)
}

//get  watch history from json server

export const getAllHistory =async()=>{
    //make Get http request  "http://localhost:4000/history" to get videos history details from the json-server return response to the watch history commponents

    return await commonAPI("GET",`${serverUrl}/history`,"")
}

//Delete  watch history from json server

export const deleteHistory =async(id)=>{
    //make Get http request  "http://localhost:4000/history/id" to delete history details from the json-server return response to the watch history commponents

    return await commonAPI("DELETE",`${serverUrl}/history/${id}`,{})
}

//Add to categories

export const addTocategories =async(reqBody)=>{
    //make Post http request  "http://localhost:4000/categories" to add videos to the json-server return response to the categories component

    return await commonAPI("POST",`${serverUrl}/categories`,reqBody)
}


//Get the categories

export const getAllcategories =async()=>{
    //make GET http request  "http://localhost:4000/categories" to get videos from the json-server return response to the categories component

    return await commonAPI("GET",`${serverUrl}/categories`,"")
}


//Delete all  categories from json-server

export const deletecategories =async(id)=>{
    //make DELETE http request  "http://localhost:4000/categories/id" to delete videos from the json-server return response to the categories component

    return await commonAPI("DELETE",`${serverUrl}/categories/${id}`,{})
}

//Update   categories from json-server

export const updateCategories =async(id,body)=>{
    //make PUT http request  "http://localhost:4000/categories/id" to update a videos to the json-server return response to the categories component

    return await commonAPI("PUT",`${serverUrl}/categories/${id}`,body)
}

