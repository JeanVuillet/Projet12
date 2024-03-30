import React from "react";
import { ResponsiveContainer, PolarAngleAxis, PolarGrid, Radar, RadarChart, Tooltip } from "recharts";
import { USER_PERFORMANCE } from "../data/data";
import './PolygonGraph.scss';

export function PolygonGraph() {
  const mydata = USER_PERFORMANCE[0].data;
  const mySubject = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité'];

  const values = mydata.map((element, index) => ({
    subject: mySubject[index],
    value: element.value
  }));

  const maxDataValue = Math.max(...mydata.map(element => element.value));

  const newValues=values.reverse();
  return (
    <div className="polygonGraph">
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius='60%' data={newValues} style={{border:'solid'}}>
          <PolarGrid gridType='polygon' radialLines={false} polarRadius={[0, 8.5, 18, 38, 57, 77]} />
          <PolarAngleAxis dataKey="subject" className="keys"  />
          <Radar name="Mike" dataKey="value"  fill="#FF0101" fillOpacity={0.7} />

          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
