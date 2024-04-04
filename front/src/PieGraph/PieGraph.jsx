import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { USER_MAIN_DATA } from "../data/data.js";
import "./PieGraph.scss";
import { useState,useEffect } from "react";
import { UserApi } from "../Api/Api.jsx";





export function PieGraph() {

  var [score, setScore]=useState();
  let [todayScore,setTodayScore]=useState();
  let [endAngle,setEndAngle]=useState();
function getScore(param){
  setScore(param);
}

  useEffect(()=>{
    setTodayScore(score * 100);
    setEndAngle(220 + (todayScore * 360) / 100);
    
    const pieData = [
      {
        name: "Zone1",
        value: todayScore
      }
     
    ];
    },[score]);

  return (
    <div className="pieDiv">
      <UserApi userId={12} getScore={getScore}/>
      <ResponsiveContainer className="pieContainer">
        <div className="whiteCircle">
            <div className="score">
            {todayScore}%
            </div>
            <div className="text">
             de votre objectif
            </div>
        </div>
        <PieChart>
          <Pie
            data={score}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={79}
            outerRadius={85}
            label={false}
            labelLine={false}
            startAngle={endAngle-30}
            endAngle={190}
           
          >
            <Cell
              fill="#FF0000" // Ici, la couleur de remplissage est définie en #FBFBFB
              className={{todayScore} > 50 ? "outer-green" : ""}
              cornerRadius={10}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
