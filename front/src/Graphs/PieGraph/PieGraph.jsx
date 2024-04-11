import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

import "./PieGraph.scss";
import { useState,useEffect } from "react";
import { useData } from "../../DataProvider/DataProvider";




export function PieGraph() {
  const [score, setScore] = useState(0);
  const [todayScore, setTodayScore] = useState(0);
  const [endAngle, setEndAngle] = useState(0);
  const [pieData, setPieData] = useState([]);

  const { sharedData } = useData();
  let tscore=null;



//calcule le pourcentage et le stock dans un usteState tscore
function getPercentage(){
  if (score>0){
   tscore = score * 100;
  setTodayScore(tscore);
  }
}
//calcule l angle final a partir de tscore
function getEndAngle(){
  if(tscore){
  setEndAngle(220 - (tscore * 360) / 100);
  }
}

// definie le useState pieData comme un objet {name: zone1  value :tscore}
//qui sera utilisee en props
function SetPieData(){
  if (tscore){
  setPieData([
    {
      name: "Zone1",
      value: tscore
    }
  ]);
}
}

  useEffect(() => {

    //cette fonction recupere le score le stock dans un useEffect (myScore)
    // et appelle les 3 fonctions de calcule des data des que le score est mis a jour
    async function pieMake(){
      if( sharedData){
      const myScore=  await sharedData.getScore();
     
      if(myScore){
    setScore(myScore);
    getPercentage()
    getEndAngle()
    SetPieData()
 ; 
     }
}
}
pieMake();
}, [sharedData, score]);

  return (
    <div className="pieDiv">
<div className="txt">Score</div>
      <ResponsiveContainer className="pieContainer">
        <div className="whiteCircle">
          <div className="score">{todayScore}%</div>
          <div className="text">de votre objectif</div>
        </div>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={79}
            outerRadius={85}
            label={false}
            labelLine={false}
            startAngle={220}
            endAngle={endAngle}
          >
            <Cell
              fill="#FF0000"
              className={todayScore > 50 ? "outer-green" : ""}
              cornerRadius={10}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
