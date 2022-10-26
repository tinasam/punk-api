import React from 'react'
import "./FilterItem.scss";

const FilterItem = (props) => {
        const { beer, toggleCheckedFilter } = props;
        const filterToggle = (event) => {
            event.preventDefault();
            toggleCheckedFilter(beer.id)
        }
  return (
    <div className="filterBox">
       
       <label className="filter">
            <input onChange={filterToggle}
                type="checkbox" 
                value={beer.checked} >
            </input>
            {beer.text}
        </label>
    </div>
  )
}

export default FilterItem;