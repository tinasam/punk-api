import React from 'react';
import "./Card.scss";

const Card = (props) => {
    const {name, tagline, description} = props;
  return (
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
  )
}

export default Card;