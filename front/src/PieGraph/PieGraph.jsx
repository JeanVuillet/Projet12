import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { USER_MAIN_DATA } from "../data/data.js";
import "./PieGraph.scss";
import { useState,useEffect } from "react";
import { UserApi } from "../Api/Api.jsx";


export function PieGraph() {
  const [score, setScore] = useState(0);
  const [todayScore, setTodayScore] = useState(0);
  const [endAngle, setEndAngle] = useState(0);
  const [pieData, setPieData] = useState([]);

  function getData(param) {
    setScore(param.data.todayScore);
  }

  useEffect(() => {
    if(score){
    const calculateData = () => {
      const tscore = score * 100;
      setTodayScore(tscore);
      setEndAngle(220 + (tscore * 360) / 100);
      setPieData([
        {
          name: "Zone1",
          value: tscore
        }
      ]);
    };

    calculateData(); // Appel de la fonction pour calculer les données dès que score est mis à jour
}}, [score]);

  return (
    <div className="pieDiv">
      <UserApi userId={12} getData={getData} />
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
            startAngle={endAngle - 30}
            endAngle={190}
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
