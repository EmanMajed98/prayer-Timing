import React from 'react';
import Timeremaining from './timeremaining';

function TitleData({ className, city, timingsdata, actualdata }) {

  const row = `$text-lg text-white ${className ?? ""}`;
  const row2 = `mt-4  font-bold ${className ?? ""}`;

  const date = new Date();
  const hours = date.getHours();
  const minutse = date.getMinutes();



  return (

    <div className='flex justify-between w-6/12 mr-64 mt-24'>
      <div className='flex flex-col'>
        <span className={row}>{hours}:{minutse}| {actualdata?.data?.date?.gregorian?.date}</span>
        <span className={row + row2}>{city.DisplayName}</span>
      </div>


      <Timeremaining timingsdata={timingsdata} />

    </div>
  )
}

export default TitleData