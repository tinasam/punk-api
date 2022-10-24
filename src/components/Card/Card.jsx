import React, {useState} from 'react';
import "./Card.scss";

const Card = (props) => {
    const { beer } = props;
    console.log(beer);
  return (
    <div className="one-beer">
    <img
        className="beer-tiles__img"
        src={beer.image_url}
        alt={beer.tagline}
        />
    <div>
        <h1 className='beer-name'>{beer.name}</h1>
        <p className='beer-desp'>{beer.description}</p>
    </div>
    </div>
  )
}

export default Card;