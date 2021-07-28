import React from 'react';
import Card from './Card';

const CardList = ({cities}) => {
  const cardArray = cities.map((user, i) => {
      return (
          <Card 
              key={i} 
              id={cities[i].id} 
              name={cities[i].name} 
              site={cities[i].site} 
              pic={cities[i].pic}
              />  
      ); 
  })
  return(
      <div>
          {cardArray}
      </div>
  );
};

export default CardList;