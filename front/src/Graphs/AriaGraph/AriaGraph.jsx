import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { USER_AVERAGE_SESSIONS } from "../../data/data.js";
import "./AriaGraph.scss";

export function AriaGraph() {
  const data2 = USER_AVERAGE_SESSIONS[0].sessions;
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const newData = data2.map((element, index) => ({
    day: days[index],
    time: element.sessionLength,
    index: index,
  }));

  const maxValue = Math.max(...newData.map((element) => element.time));
  const minValue = Math.min(...newData.map((element) => element.time));

  const [rightDiv, setRightDiv] = useState(null);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { day, time, index } = payload[0].payload;

      // Calcul de la largeur restante jusqu'à dimanche
      const rightSpace = (7 - index) * (221.5 / 7) + 18; // 258 est la largeur du graphique

      setRightDiv(rightSpace);

      return (
        <div className="custom-tooltip" style={{ lineHeight: 0 }}>
          <p className="label">{`${time} min`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="containerDiv">
      <div className="calcDiv"></div>
      <div className="rightDiv" style={{ width: `${rightDiv}px` }}></div>

      <ResponsiveContainer width={258} height={260} className="container">
        <AreaChart
          data={newData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          fill="none"
        >
          <XAxis
            dataKey="day"
            domain={[-1, 8]}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis domain={[-10, maxValue]} hide={true} />
          <Tooltip content={<CustomTooltip />} hide={true}/>
          <Area
            dataKey="time"
            stroke="white"
            strokeWidth="2"
            fill="none"
            type="natural"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
