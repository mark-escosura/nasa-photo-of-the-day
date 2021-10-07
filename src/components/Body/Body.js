import React, { useState, useEffect } from 'react';

import axios from 'axios';
import './Body.css';

const Body = (props) => {
    const { explanation } = props
    const [body, setBody] = useState(null)
    useEffect(()=> {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=pYnLIwyIEC7J14bWyXNHQoAbhU3xeHZP6hL04U9H')
        .then(resp => {
            console.log(resp.data.explanation)
            setBody(resp.data.explanation);
        })
        .catch(err => {
            console.log(err);
        })
    }, [explanation])

     /*********** Return **********/

    return (
        <div className='body-container'>
            <p>{body}</p>
        </div>
      )
}

export default Body;