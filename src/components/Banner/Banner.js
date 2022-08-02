import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../constants/Axios'
import {API_KEY, imageURL} from '../../constants/Constants'
function Banner() {
  const [movie, setMovie] = useState()

 useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)])
    })
 
 }, [])
 
  return (
    <div style={{backgroundImage:`url(${movie ? imageURL+movie.backdrop_path : ""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title ? movie.title : movie.name :  ""}</h1>
            <div className='banner_buttons'>
                <button className='button'> Play </button>
                <button className='button'> My Playlist</button>

            </div>
            <h1 className='description'> {movie?movie.overview:""}
             </h1>
        </div>
        <div className="fade_bottom">

        </div>
    </div>
  )
}

export default Banner