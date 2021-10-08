import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar/SearchBar';
import Image from './components/Image/Image';
import NasaBody from './components/Body/Body';
import Footer from './components/Footer/Footer';
import styled from 'styled-components';

const NasaTitle = styled.h1`
font-size: 1.25rem;
`


const Details = (props) => {
    const { nasa } = props
    const [details, setTitle] = useState(null)
    useEffect(()=> {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=pYnLIwyIEC7J14bWyXNHQoAbhU3xeHZP6hL04U9H')
        .then(resp => {
            setTitle(resp.data.title);
        })
        .catch(err => {
            console.log(err);
        })
    }, [nasa])

     /*********** Return **********/

    return (
        <div>
            <SearchBar />
            <Image url={details} />
            <NasaTitle> <h1>{details}</h1> </NasaTitle>
            <NasaBody explanation={details} />
            <Footer foot={details}/>
        </div>
      )
}

export default Details;

// try to put all the CSS styling in one css file!
