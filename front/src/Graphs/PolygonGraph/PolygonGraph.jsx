import React, { useEffect, useState } from "react";
import { ResponsiveContainer, PolarAngleAxis, PolarGrid, Radar, RadarChart, Tooltip } from "recharts";
import { USER_PERFORMANCE } from "../../data/data.js";
import './PolygonGraph.scss';
import { PerfApi } from "../../Api/Api.jsx";
import { Api2 } from "../../Api/Api2.js";
import { useData } from "../../DataProvider/DataProvider.jsx";
export function PolygonGraph() {

const [perfData, setPerfData]=useState(null);

const [values, setValues]=useState([]);
const [newValues, setNewValues]=useState(null);

const [maxDataValue, setMaxData]=useState();


let {sharedData}=useData();

let myValue=null;

let calc=()=>{
  if (myValue){
  setMaxData( Math.max( myValue.map(element => element.value)));

  setNewValues (myValue.reverse());
  }
 }


 function mapper(){
  if(perfData){

 const mySubject = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité'];


   myValue= perfData.map((element, index) => ({
   subject: mySubject[index],
   value: element.value
 }));
 }
}
useEffect(()=>{
 async function graphMaker(){
  if (sharedData){
  const data= await sharedData.getPerformance();

  if (data){
  setPerfData(data.data);

mapper();
calc();
}
}
}
 
graphMaker();
},[sharedData, perfData])


  return (
    <div className="polygonGraph">
      
      <ResponsiveContainer className={'responsivCont'}>
        <RadarChart cx="50%" cy="50%" outerRadius='60%' data={newValues?newValues:[]} style={{border:'solid'}}>
          <PolarGrid gridType='polygon' radialLines={false} polarRadius={[0, 8.5, 18, 38, 57, 77]} />
          <PolarAngleAxis dataKey="subject" className="keys"  tick={{ fill: "white" }} radius={0} />
          <Radar name="Mike" dataKey="value"  fill="#FF0101" fillOpacity={0.7} />

          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
