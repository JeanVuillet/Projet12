import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { USER_MAIN_DATA } from "../data/data.js";
import "./PieGraph.scss";

const data = USER_MAIN_DATA;

const todayScore = data[0].todayScore * 100;
const endAngle = 220 + (todayScore * 360) / 100;

const pieData = [
  {
    name: "Zone1",
    value: todayScore
  }
 
];

export function PieGraph() {
  return (
    <div className="pieDiv">
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
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={140}
            outerRadius={150}
            label={false}
            labelLine={false}
            startAngle={endAngle-30}
            endAngle={190}
           
          >
            <Cell
              fill="#FF0000" // Ici, la couleur de remplissage est définie en #FBFBFB
              className={todayScore > 50 ? "outer-green" : ""}
              cornerRadius={10}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
