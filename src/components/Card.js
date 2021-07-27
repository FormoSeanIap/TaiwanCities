import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='city' width="200" height="150" src={`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_New_Taipei_City.svg/1024px-Flag_of_New_Taipei_City.svg.png`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
