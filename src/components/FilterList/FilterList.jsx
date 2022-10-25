import React from 'react';
import "./FilterList.scss";
import FilterItem from "../FilterItem/FilterItem";
// import beers from '../../assets/data/beers';
const FilterList = (props) => {
    const { beers} = props;


    const filterBeerList = beers.filter((filter) => {
      if (text=="High ABV (>6/0%)"){
          return filter.abv >6;
      }
    else if (text=="Classic Range"){
        const year = filter.first_brewed.slice(-4,)
    }
    else if (text=="Acidic (ph <4)") {
      return filter.ph <4;
    }  
  });
  return (
    <div className='updatedFilteredBeer'>{filter}</div>
    );
  }

export default FilterList;