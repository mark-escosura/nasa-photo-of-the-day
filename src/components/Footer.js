import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Footer = (props) => {
    const { foot } = props
    const [footer, setFooter] = useState(null)
    useEffect(()=> {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=pYnLIwyIEC7J14bWyXNHQoAbhU3xeHZP6hL04U9H')
        .then(resp => {
            setFooter(resp.data.copyright);
        })
        .catch(err => {
            console.log(err);
        })
    }, [foot])

     /*********** Return **********/

    return (
        <div>
            <p>Copyright: {footer}</p> {/** How would I render multiple key:value pairs inside one file instead of making multiple files for each key:value pair? */}
        </div>
      )
}

export default Footer;