import React, {useState} from 'react';
import CardList from '../CardList/CardList';
import Navbar from '../Navbar/Navbar';


const SearchBox = (props) => {
    const [searchField, setSearchField] = useState("");
        return (
            <div className="searchBox" 
            type="textbox" 
            >Search</div>
        );  
    
};

export default SearchBox;