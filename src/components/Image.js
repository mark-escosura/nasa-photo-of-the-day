import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Image = (props) => {
    const { url } = props
    const [nasaImage, setNasaImage] = useState(null)
    useEffect(()=> {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=pYnLIwyIEC7J14bWyXNHQoAbhU3xeHZP6hL04U9H')
        .then(resp => {
            console.log(resp.data.url)
            setNasaImage(resp.data.url);
        })
        .catch(err => {
            console.log(err);
        })
    }, [url])

     /*********** Return **********/

    return (
        <div>
            <img src={nasaImage} alt='just-a-cool-illustration-of-one-of-the-galaxies'/>
        </div>
      )
}

export default Image;