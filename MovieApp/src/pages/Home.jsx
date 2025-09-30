import { useEffect ,useState} from 'react'
import './Home.css'
import   axios from 'axios'
import {Link} from 'react-dom'
import SearchCard from './SearchCard'


function Home(){
    const [movies, setMovies] = useState([])
 
    useEffect(()=>{
     const getMovieApi = async ()=>{
        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d41a1eae3c63597394f6bc20edb375ee') 
            setMovies(response.data.results)
        } catch (error) {
           console.error(error)  
        }
     }
        
     getMovieApi()
    }, [])
        
    return(
        <>
         <SearchCard />
         <div className="movie-wrapper">
            {movies && movies.length > 0 ? (
              movies.map((movie) => (
                <div className="movie-container" key={movie.id}>
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                  <div className="movie-name">
                                    <a href={`https://www.themoviedb.org/movies/${movie.id}`} target="_blank">
                                     <h3>{movie.original_title}</h3>

                                 </a>

                  </div>
                  <div className="movie-year">
                    <p> Realeased Date : {movie.release_date}</p>
                      <p> Average Vote: {movie.vote_average}</p>
                    <p> Vote Count: {movie.vote_count}</p>

                  </div>
                </div>
               
              ))
            ) : (
              <div>No movies available</div>
            )}
            
         
       
           
              
               
           

                


         </div>
        
        
        
        </>
    )
}

export default Home