import React from 'react';

const Card = ({test}) => {
  return (
    <li className="card">
      <img
        src={`https://www.artic.edu/iiif/2/${test.image_id}/full/843,/0/default.jpg`}
        alt={test.title}
      />
      <div className="infos">
        <h1>{test.title}</h1>
        <h4>{test.artist_title}</h4>
        <p>{test.place_of_origin}</p>
      </div>
    </li>
  );
};

export default Card;
