import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledBody = styled.body`
    margin: 0 38% 0;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding: 2% 2%;
`
const NasaBody = (props) => {

    const { explanation } = props
    const [paragraph, setParagraph] = useState(null)
    useEffect(()=> {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=pYnLIwyIEC7J14bWyXNHQoAbhU3xeHZP6hL04U9H')
        .then(resp => {
            setParagraph(resp.data.explanation);
        })
        .catch(err => {
            console.log(err);
        })
    }, [explanation])

     /*********** Return **********/

    return (
        <div>
            <StyledBody>
            <p>{paragraph}</p>
            </ StyledBody>
        </div>
      )
}

export default NasaBody;