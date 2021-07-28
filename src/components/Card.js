import React from 'react';

const Card = ({ name, site, pic }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
    <img alt='city' width="200" height="150" src={pic} />
      <div>
        <h2>{name}</h2>
        <a href={site}><h3>Visit!</h3></a>
      </div>
    </div>
  );
}

export default Card;
