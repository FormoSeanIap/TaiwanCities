import React from 'react';

const Tainan = () => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img 
      alt='city' 
      width="200" 
      height="150" 
      src={`https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Flag_of_Tainan_City.svg/1024px-Flag_of_Tainan_City.svg.png`} />
      <div>
        <h2>Tainan City</h2>
        <a href="https://www.tainan.gov.tw/en/"><h3>Visit!</h3></a>
      </div>
    </div>
  );
}

export default Tainan;
