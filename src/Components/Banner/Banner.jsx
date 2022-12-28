import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY,imageUrl } from '../../Constants/constant'



function Banner() {
  const [movie,setMovie] = useState()
  const rand = Math.floor(Math.random() * 20);
  console.log("random");
  console.log(rand);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((respose) => {
      // console.log(respose.data.results[1].backdrop_path);
      setMovie(respose.data.results[rand])
    })
  },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})`}}>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : 'movie name'}</h1>
        <div className='banner-buttons'>
            <button className='button'>Play</button>
            <button className='button'>Mylist</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : 'movie description'}</h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner
