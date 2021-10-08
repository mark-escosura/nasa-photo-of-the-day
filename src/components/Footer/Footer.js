import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledFooter = styled.p`
    font-size: 0.9rem;
    line-height: .5;
    padding:0;
    padding-bottom: 2%;
`

const Footer = (props) => {
    const { foot } = props
    const [copyright, setCopyright] = useState(null)
    const [date, setDate] = useState(null)

    useEffect(()=> {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=pYnLIwyIEC7J14bWyXNHQoAbhU3xeHZP6hL04U9H')
        .then(resp => {
            setCopyright(resp.data.copyright);
        })
        .catch(err => {
            console.log(err);
        })
    }, [foot])

    useEffect(()=> {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=pYnLIwyIEC7J14bWyXNHQoAbhU3xeHZP6hL04U9H')
        .then(resp => {
            setDate(resp.data.date);
        })
        .catch(err => {
            console.log(err);
                })
    }, [foot])

     /*********** Return **********/

    return (
        <div>
        <StyledFooter>
            <p>{date}</p>
            <p> Copyright: @ {copyright}</p> {/** How would I render multiple key:value pairs inside one file instead of making multiple files for each key:value pair? */}
        </ StyledFooter>
        </div>
      )
}

export default Footer;