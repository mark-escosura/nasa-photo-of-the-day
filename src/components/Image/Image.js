import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ImageStyling = styled.img` // how do i target a class name instead of HTML elements?
max-height: 60vh;
border-radius: 3%;
padding-top: 3%;
`

const Image = (props) => {

    const { url } = props
    const [nasaImage, setNasaImage] = useState(null)

    useEffect(()=> {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=pYnLIwyIEC7J14bWyXNHQoAbhU3xeHZP6hL04U9H')
        .then(resp => {
            setNasaImage(resp.data.url);
        })
        .catch(err => {
            console.log(err);
        })
    }, [url])

     /*********** Return **********/

    return (
        <div>
            <ImageStyling src={nasaImage} alt='just-a-cool-illustration-of-one-of-the-galaxies' />
        </div>
      )
}

export default Image;