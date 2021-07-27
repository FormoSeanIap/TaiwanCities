import React from 'react';

const Taipei = () => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img 
      alt='city' 
      width="200" 
      height="150" 
      src={`https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Taipei_City.svg/1024px-Flag_of_Taipei_City.svg.png`} />
      <div>
        <h2>Taipei City</h2>
        <a href="https://english.gov.taipei/"><h3>Visit!</h3></a>
      </div>
    </div>
  );
}

export default Taipei;
