import React from 'react'
import "./FilterItem.scss";

const FilterItem = (props) => {
        const { filterBeer, handleInput } = props;

  return (
    <div className="filterBox">
      <input onChange={handleInput} type="checkbox" value={filterBeer} />
    </div>
  )
}

export default FilterItem;