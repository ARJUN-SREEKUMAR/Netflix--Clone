import React from 'react'
import './Banner.css'
import {apiKey,imgUrl} from '../constatnts/constants'
import axios from '../constatnts/axios'
import { useEffect } from 'react'
import { useState } from 'react'
const API_KEY =apiKey
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      // console.log(response.data.results[0])
      setMovie(response.data.results[0])
    })

     
  }, [])


 
  
  return (
    <div style={{backgroundImage: `url(${movie ? imgUrl+movie.backdrop_path :""})`}}
     className='banner'>
     
        <div className='contents'>
            <h1 className='titile'>{movie ? movie.original_title : ""}</h1>
            <div className='buttons'>
            <button className='button'> Play </button>
            <button className='button'> Mylist </button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}
            </h1>
            
            
        </div>
        <div className="fade"> </div>
    </div>
  )
}

export default Banner