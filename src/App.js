import React,{useEffect, useState} from "react";
import "./index.css";
import Card from "./component/card";
import Divider from "./component/divider";
import TitleData from "./component/titleData";
import Select from "./component/select";

function App() {

  const [city , setCity]= useState({DisplayName:"القـــدس", APIName:"Jerusalem"});
  const [actualdata,setActualdata]=useState({});

  const nameTocity =[
    {DisplayName:"القـــدس", APIName:"Jerusalem"},
    {DisplayName:"غــــزة",APIName:"Gaza"},
    {DisplayName:"يـــافـا",APIName:"Jaffa"},
    {DisplayName:"رام الـلـه",APIName:"Ramallah"}
  ]

  const handleChangeCity=(event)=>{
     //(API)عشان أقدر اجيب القيمتين اسم العرض و اسم ال 
      const cityObject = nameTocity.find((city2name)=>{
        return(  
          city2name.APIName === event.target.value
        )
      }) 
      setCity(cityObject);
  }

  const [timingsdata, setTimingsdata] = useState([]);

     
  useEffect(()=>{
    async function getData(){
    const response=await fetch(`http://api.aladhan.com/v1/timingsByCity?country=PSE&city=${city.APIName}`)
    const actualData =await response.json();
    console.log("actualData",actualData);
    console.log(city);

    const time = actualData.data.timings;
    //  console.log("time",time)
    //  console.log("time",time.Fajr,time.Dhuhr,time.Asr,time.Maghrib,time.Isha);
    const arrTime=[time.Fajr,time.Dhuhr,time.Asr,time.Maghrib,time.Isha];
    //  console.log(arrTime)
    setTimingsdata(arrTime);
    setActualdata(actualData);
    
    }
    getData();

  },[city]);



// const diff = 44940 - 18120;                                                                                                            
// const hoursRemind = Math.floor(diff / 3600);    
// const minutesRemaind = Math.floor((diff % 3600) / 60);    
// console.log(diff);
// console.log(`${hoursRemind}:`, `${minutesRemaind}`);             
// const myInterval= setInterval(diff - 1
// , 1000);
//   console.log(myInterval)



  return (
          <>   
          <TitleData city={city} actualdata={actualdata} timingsdata={timingsdata}/>
          <Divider/>
          <Card timingsdata={timingsdata}/>
          <Select handleChangeCity={handleChangeCity} nameTocity={nameTocity}/>
          </>
  );
}

export default App;
