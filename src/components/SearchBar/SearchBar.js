import React from 'react';
import './SearchBar.css'

const SearchBar = (props) => {

    return(
        <div className="search-bar-wrapper">
            <div>
                {/** How would I make a Navigation Bar in one file and render multiple key:value pairs in it? 
                * What is the syntax for making a navbar inside JSX?
                */}
            <form className="search-form">
                <input
                 type="text"
                 placeholder="Search For The Stars"
                />
            </form>
        </div>
        </div>
        
        
    )
}

export default SearchBar;


