import React from 'react';
import "./CardList.scss";
import Card from "../Card/Card";

const CardList = (props) => {
    const { beers } = props;

    const beerListJSX = beers.map((beer, index) => (
        <Card />
    ));
    
    return (
      
        <div> {beerListJSX}</div>
      
  );
};

export default CardList;