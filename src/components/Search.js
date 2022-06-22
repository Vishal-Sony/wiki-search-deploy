import React from 'react';
import TextField from '@mui/material/TextField';

function Search({query,setQuery,onClickSearch}) {

  const handleChange=(e)=>{
    setQuery(e.target.value)
  }
    return (
      <>
         <div className="wrapper">
    <div class="container">
      <form role="search" method="get" class="search-form form" action="">
        <label>
            <span class="screen-reader-text">Search for...</span>
            <input type="search" class="search-field" placeholder="Type something..." value={query} name="s" title="" onChange={handleChange} />
        </label>
        <input type="submit" class="search-submit button" value="Search" onClick={onClickSearch}/>
    </form>
    </div>
  </div>
  </>
    
    );
  }
  
  export default Search;
  