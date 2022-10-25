import React from 'react'
import './SearchBox.scss';

const SearchBox = (props) => {
      const { searchBeer, handleInput } = props;
      const search = "searchlabel"
  return (
    <div className="searchBox1">
      <label htmlFor={search} className="search-box__label">
        Search By Name
      </label>

     <input onInput={handleInput} type="text" value={searchBeer} name={search} />
          
    </div>
  )
}

export default SearchBox;