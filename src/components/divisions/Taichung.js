import React from 'react';

const Taichung = () => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img 
      alt='city' 
      width="200" 
      height="150" 
      src={`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Flag_of_Taichung_City.svg/1024px-Flag_of_Taichung_City.svg.png`} />
      <div>
        <h2>Taichung City</h2>
        <a href="https://english.taichung.gov.tw/"><h3>Visit!</h3></a>
      </div>
    </div>
  );
}

export default Taichung;
