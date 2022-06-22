import './App.css';
import React, { useState, useEffect } from 'react';
import Cards from './components/Cards'
import Logo from './components/Logo'
import Search from './components/Search'
import {search} from './server'


function App() {
  const [data,setData]=useState([]);
  const [query,setQuery]=useState('');
  
  var data2=[];
  
 const onClickSearch =(e) => {
   e.preventDefault()
   search(query).then((res)=>{
     for (var i in res.data.query.pages) {   
       data2.push(res.data.query.pages[i])      
      }
      setData(data2);
      console.log(data);
    setQuery('')
  })}



  return (
    <div className="App">
     <Logo/>
     <Search query={query} setQuery={setQuery} onClickSearch={onClickSearch}/>
     <div className="CardList">
    {data.map(ele=>(<Cards data={ele}/>))}
    
    </div>
    </div>
  );
}

export default App;
