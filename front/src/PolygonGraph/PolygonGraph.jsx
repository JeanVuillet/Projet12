import React, { useEffect, useState } from "react";
import { ResponsiveContainer, PolarAngleAxis, PolarGrid, Radar, RadarChart, Tooltip } from "recharts";
import { USER_PERFORMANCE } from "../data/data";
import './PolygonGraph.scss';
import { PerfApi } from "../Api/Api";
import { Api2 } from "../Api/Api2";
export function PolygonGraph() {

const [perfData, setPerfData]=useState(null);

const [values, setValues]=useState([]);
const [newValues, setNewValues]=useState([]);

const [maxDataValue, setMaxData]=useState();


useEffect(()=>{
 async function graphMaker(){
  const data= await (Api2(12));
  setPerfData(data);

   if(perfData){

  const mySubject = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité'];

   let myValue= perfData.data.keyData.map((element, index) => ({
    subject: mySubject[index],
    value: element.value
  }));

 let calc=()=>{
  setMaxData( Math.max( myValue.map(element => element.value)));

  setNewValues (myValue.reverse());
 }
 calc();
}
}
graphMaker();
},[perfData, newValues])


  return (
    <div className="polygonGraph">
      
      <ResponsiveContainer width={258} height={263}>
        <RadarChart cx="50%" cy="50%" outerRadius='60%' data={newValues} style={{border:'solid'}}>
          <PolarGrid gridType='polygon' radialLines={false} polarRadius={[0, 8.5, 18, 38, 57, 77]} />
          <PolarAngleAxis dataKey="subject" className="keys"  tick={{ fill: "white" }} radius={0} />
          <Radar name="Mike" dataKey="value"  fill="#FF0101" fillOpacity={0.7} />

          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
