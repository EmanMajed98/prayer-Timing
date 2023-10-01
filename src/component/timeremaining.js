import React from 'react'

function Timeremaining({ className, timingsdata, ...rest }) {

  const row = `$text-lg text-white ${className ?? ""}`;
  const row2 = `mt-4  font-bold ${className ?? ""}`;

  //get now time 
  const date = new Date();
  const hoursNow = date.getHours();
  const minutseNow = date.getMinutes();
  const secondeNow = date.getSeconds();
  // convert now time to seconde 
  const hToSeconds = hoursNow * 3600;
  const mToSeconds = minutseNow * 60;
  const sToseconds = secondeNow;
  const totalSecToHM = hToSeconds + mToSeconds + sToseconds;

  // convert all time to seconde 
  const fajrTime = `${timingsdata[0]}`;
  const splitTofajrTime = fajrTime.split(':').map(Number)
  const fajrTimeToSec = splitTofajrTime[0] * 3600 + splitTofajrTime[1] * 60;

  const duhrTime = `${timingsdata[1]}`;
  const splitToduhrTime = duhrTime.split(':').map(Number)
  const duhrTimeToSec = splitToduhrTime[0] * 3600 + splitToduhrTime[1] * 60;

  const asrTime = `${timingsdata[2]}`;
  const splitToasrTime = asrTime.split(':').map(Number)
  const asrTimeToSec = splitToasrTime[0] * 3600 + splitToasrTime[1] * 60;

  const maghrebTime = `${timingsdata[3]}`;
  const splitTomaghrebTime = maghrebTime.split(':').map(Number)
  const maghrebTimeToSec = splitTomaghrebTime[0] * 3600 + splitTomaghrebTime[1] * 60;

  const IshaTime = `${timingsdata[4]}`;
  const splitToIshaTime = IshaTime.split(':').map(Number)
  const ishaTimeToSec = splitToIshaTime[0] * 3600 + splitToIshaTime[1] * 60;


  const arr = [
    { 'name': "الفجر", "time": fajrTimeToSec },
    { 'name': "الظهر", "time": duhrTimeToSec },
    { 'name': "العصر", "time": asrTimeToSec },
    { 'name': "المغرب", "time": maghrebTimeToSec },
    { 'name': "العشاء", "time": ishaTimeToSec }
  ];
  const x = [];
  const y = [];
  const z = [];
  const hm = [];
  // console.log(arr,x,y,hm)


  for (let i = 0; i <= arr.length; i++) {

    if (arr[i]?.time < totalSecToHM && totalSecToHM < arr[i + 1]?.time) {

      // let diff = arr[i + 1]?.time - arr[i]?.time;
       const remaindTime = arr[i + 1]?.time - totalSecToHM;
       const hoursRemind = Math.floor(remaindTime / 3600);
       const minutesRemaind = Math.floor((remaindTime % 3600) / 60);
       const secondeRemaind = Math.floor((remaindTime % 60));
       hm.push(hoursRemind + ":" + minutesRemaind + ":" + secondeRemaind)
      //  console.log( "remidtime",remaindTime)
      //  console.log(hoursRemind + ":" + minutesRemaind + ":" + secondeRemaind)

      if (arr[i + 1]?.name !== "الفجر") {
        x.push(arr[i + 1]?.name);
      } else {
        y.push("الفجر")
      }

      // let myInterval = setInterval(() => {
      //   diff -= 1;
      //   if (diff === 0) {
      //     clearInterval(myInterval)
      //   }
      // }, 1000)

    }else if(arr[i + 1]?.name === "الفجر"){
        z.push("الفجر")
      }

    
  }
  
  return (
    <div>
      <div className='flex flex-col' {...rest}>

        <span className={row}>متبقي على صلاة {x}{y}{z}</span>

        <span className={row + row2}>
          <span>{hm}</span>
        </span>
      </div>

    </div>
  )
}
export default Timeremaining