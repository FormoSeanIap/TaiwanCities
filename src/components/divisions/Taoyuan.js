import React from 'react';

const Taoyuan = () => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img 
      alt='city' 
      width="200" 
      height="150" 
      src={`https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Flag_of_Taoyuan_City.svg/1024px-Flag_of_Taoyuan_City.svg.png`} />
      <div>
        <h2>Taoyuan City</h2>
        <a href="https://www.tycg.gov.tw/eng/"><h3>Visit!</h3></a>
      </div>
    </div>
  );
}

export default Taoyuan;
