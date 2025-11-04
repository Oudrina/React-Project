import React, { useState } from 'react'

const SearchItem = () => {
 const [sreachTerm, setsreachTerm] = useState('')

  const[error,setError]= useState(false);
  return (
     <div className="eventpage__page__wrapper">

          <div className="app__eventPage__search__input">
            <input type="text" placeholder='Search events'
            value={sreachTerm}
            onChange={(e)=>setsreachTerm(e.target.value)}
            onMouseDown={()=>setError(true)}
             />

              <div className="app__eventpage__search_button">
                <button>
                  Search
                </button>
              </div>
              <div className='search__error'>
             {sreachTerm.length===0 &&error&& <span>No searchTerm found</span> }

              </div>

          </div>

      </div>
  )
}

export default SearchItem