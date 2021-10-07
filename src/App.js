import React, { useState, useEffect } from "react";
import axios from 'axios';

import Details from './Details';

import "./App.css";

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
    <div className="App">
      <p>
        {/* <span role="img" aria-label='go!'>🚀</span>! */}
        {
          <Details nasa={nasaPost}/>
        }
      </p>
    </div>
  );
}

export default App;
