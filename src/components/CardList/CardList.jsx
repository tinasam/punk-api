import React from 'react';
import "./CardList.scss";
import Card from "../Card/Card";

const CardList = (props) => {
    const { beers } = props;

    const beerListJSX = beers.map((beer ) => (
        <Card beer={beer} key={beer.id} />
    ));
    
    return (
        <div className='all-beers'>{beerListJSX}</div>
  );
};

export default CardList;