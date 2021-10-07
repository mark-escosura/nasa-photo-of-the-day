import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar/SearchBar';
import Image from './components/Image';
import Body from './components/Body/Body';
import Footer from './components/Footer';


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
            <h1>{details}</h1>
            <Image url={details}/>
            <Body explanation={details} />
            <Footer foot={details}/>
        </div>
      )
}

export default Details;

// try to put all the CSS styling in one css file!
