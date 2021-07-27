import React from 'react';
import Taipei from './divisions/Taipei';
import NewTaipei from './divisions/NewTaipei';
import Kaohsiung from './divisions/Kaohsiung';
import Tainan from './divisions/Tainan';
import Taichung from './divisions/Taichung';
import Taoyuan from './divisions/Taoyuan';

const CardList = ({ cities, i }) => {

  const admin =  [
    <Taipei key='a' name='Taipei' />, 
    <NewTaipei key='b' name='NewTaipei'/>,
    <Taoyuan key='c' name='Taoyuan'/>,
    <Taichung key='d' name='Taichung'/>,
    <Tainan key='e' name='Tainan' />,
    <Kaohsiung key='f' name='Kaohsiung'/>,
    ];
  
  return (
    <div> 
      {admin}
    </div>
  );
}

export default CardList;