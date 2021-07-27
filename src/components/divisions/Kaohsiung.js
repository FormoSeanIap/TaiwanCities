import React from 'react';

const Kaohsiung = () => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img 
      alt='city' 
      width="200" 
      height="150" 
      src={`https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_Kaohsiung_City.svg/1024px-Flag_of_Kaohsiung_City.svg.png`} />
      <div>
        <h2>Kaohsiung City</h2>
        <a href="https://www.kcg.gov.tw/EN/Default.aspx"><h3>Visit!</h3></a>
      </div>
    </div>
  );
}

export default Kaohsiung;
