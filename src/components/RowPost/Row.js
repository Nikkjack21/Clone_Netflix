import React, {useEffect, useState} from 'react'
import "./Row.css"
import {imageURL, API_KEY} from '../../constants/Constants'
import axios from '../../constants/Axios'
import Youtube from 'react-youtube'



function Row(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    })
  
   
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleMovie = (id) =>{
      console.log(id)
      axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        if(response.data.results.length!==0){
          setUrlId(response.data.results[0])
        }else{
          console.log('Trailer not avialable')
        }
      })
  }
  
  return (
    <div className='row'>
        <h2 > {props.title} </h2>
        <div className='posters'>
            {movies.map((obj, index)=>

              
              <img  key={index} onClick={()=>handleMovie(obj.id)} className={props.isSmall ?  'small_poster':'poster'} src={`${imageURL+obj.backdrop_path}`}alt="poster" />
            
            )}

           
        </div>
     {  urlId &&  <Youtube videoId={urlId.key} opts={opts} />  }
    </div>
  )
}

export default Row