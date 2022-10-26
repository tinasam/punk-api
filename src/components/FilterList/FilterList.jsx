import React from 'react';
import "./FilterList.scss";
import FilterItem from "../FilterItem/FilterItem";
// import beers from '../../assets/data/beers';
const FilterList = (props) => {
    const { filterBeer, toggleCheckedFilter } = props;

    const beersFiltered = filterBeer.map((beer ) => (
      <FilterItem beer={beer} toggleCheckedFilter={toggleCheckedFilter} key={beer.id} />
      ));
    
  return (
    <div> {beersFiltered} </div>
    );
  }

export default FilterList;