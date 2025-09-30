 import { useEffect, useState } from 'react'
import './SearchCard'
import axios from 'axios'
 function SearchCard(){ 
    const [query , setQuery] = useState("")
    const [results, setResults] =useState([])

    function submitForm(e){
        e.preventDefault();
        // The search will be triggered by useEffect when query changes
    }

    useEffect(() => {
        if (query.trim() === "") {
            setResults([]);
            return;
        }
        const getSearch = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: "d41a1eae3c63597394f6bc20edb375ee",
                        query: query
                    }
                });
                setResults(response.data.results);
            } catch (error) {
                console.error(error)
                setResults([]);
            }
        };
        getSearch();
    }, [query]);
   return(
    <>
     <form action=""  onSubmit={submitForm}>
        <input type="text"
         name="search"
          id=""
          value={query}
          onChange={(e)=>{setQuery(e.target.value)}}
           />
           <button type="submit">Search</button>
     </form> 

     <div className='search-wrapper'>


     {results && results.length > 0 ? (
        results.map((result) => (
           <div className="movie-container-wrapper" key={result.id}>
                  <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} alt="" />
                  <div className="movie-name">
                                    <a href={`https://www.themoviedb.org/movies/${result.id}`} target="_blank" rel="noopener noreferrer">
                                     <h3>{result.original_title}</h3>
                                 </a>
                  </div>
                  <div className="movie-year">
                    <p> Released Date : {result.release_date}</p>
                      <p> Average Vote: {result.vote_average}</p>
                    <p> Vote Count: {result.vote_count}</p>
                  </div>
                </div>
        ))
     ) : <div>No search results found</div>}
     
     </div>
    
    
    </>
   )
}

export default SearchCard