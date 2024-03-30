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
  const newValues=values.reverse();
  return (
    <div className="polygonGraph">
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={newValues}>
          <PolarGrid gridType='polygon' radialLines={false} polarRadius={[0, 30, 60, 90, 120, 150]} />
          <PolarAngleAxis dataKey="subject" />
          <Radar name="Mike" dataKey="value"  fill="#FF0101" fillOpacity={0.7} />

          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
