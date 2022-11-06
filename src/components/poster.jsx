import React from 'react'
import './poster.css'
import {apiKey,imgUrl} from '../constatnts/constants'
import axios from '../constatnts/axios'
import { useEffect } from 'react'
import { useState } from 'react'
function Poster(props) {
  const API_KEY =apiKey;
  const [movie, setmovie] = useState([])
  useEffect(() => {
    // axios.get(`/discover/tv?api_key=${API_KEY}&with_networks=${props.type}`).then((response)=>{
    axios.get(props.type).then((response)=>{
      console.log(response.data.results)
      setmovie(response.data.results)
    }) 
  }, )
  
  return (
    <div className='row'>
    <h2 className="titile"> {props.titile} </h2>
    <div className="posters">
    {movie.map((obj)=>
   
      <img className='poster'alt='unable to load poster' src={`${imgUrl+obj.poster_path}`}  />
      
     )}
   
    </div></div>
  )
}

export default Poster