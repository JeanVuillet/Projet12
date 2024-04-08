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

console.log(sharedData);

  useEffect(() => {

    async function pieMake(){
      if( sharedData){
      const score=  await sharedData.getScore();
    if(score){
    const calculateData = () => {
      const tscore = score * 100;
      setTodayScore(tscore);
      console.log('score'+tscore)
      setEndAngle(220 - (tscore * 360) / 100);
      console.log('endAngle'+endAngle)
      setPieData([
        {
          name: "Zone1",
          value: tscore
        }
      ]);
    };

    calculateData(); // Appel de la fonction pour calculer les données dès que score est mis à jour
  }
}
}
pieMake();
}, [sharedData]);

  return (
    <div className="pieDiv">

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
