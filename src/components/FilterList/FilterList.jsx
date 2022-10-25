import React from 'react';
import "./FilterList.scss";
import FilterItem from "../FilterItem/FilterItem";
// import beers from '../../assets/data/beers';
const FilterList = (props) => {
    const { beerFilter, filterBeer} = props;

    const beersFiltered = beerFilter.map((beer ) => (
      <FilterItem beer={filterBeer} key={beer.id} />
  ));
    
  return (
    < FilterItem  />
    );
  }

export default FilterList;