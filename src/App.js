import React, { useState, useEffect } from "react";
import axios from 'axios';
import Details from './Details';
import styled from 'styled-components';
import "./App.css";

const NasaPost = styled.div`
background-color: #D2B48C;
margin-bottom: -50px;
`

function App() {
  
  const [nasaPost, setNasaPost] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=pYnLIwyIEC7J14bWyXNHQoAbhU3xeHZP6hL04U9H')
    .then(resp => {
      console.log(resp);
      setNasaPost(resp.data);
    })
      .catch(err => {
        console.log(err);
      })
  },[])

  return (
    <NasaPost>
      <div className="App">
        <p>
          <Details nasa={nasaPost}/>
        </p>
      </div>
    </ NasaPost>
  );
}

export default App;
