import React from 'react';
import "./CardList.scss";
import beers from "../../assets/data/beers.js"
import Card from "../Card/Card";

const CardList = (props) => {
    const { beers } = props;

    const beerListJSX = beers.map((beer, index) => (
        <div key={ beer.name + (index + 1)} >
            <img
                className="beer-tiles__img"
                src={beer.image_url}
                alt={beer.tagline}
                />
            <div className="beer-tiles">
                <h1>{beer.name}</h1>
                <p>{beer.description}</p>
            </div>
        </div>
    ));
    return (
        <>{beerListJSX}
        
        </>
  );
};

export default CardList;