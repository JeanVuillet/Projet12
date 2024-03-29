import { ResponsiveContainer, PolarAngleAxis, PolarGrid, Radar, RadarChart, Tooltip } from "recharts";
import './PolygonGraph.scss';


const data = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'English', A: 98, B: 130, fullMark: 150 },
  { subject: 'Science', A: 86, B: 130, fullMark: 150 },
  { subject: 'History', A: 99, B: 100, fullMark: 150 },
  { subject: 'Geography', A: 85, B: 90, fullMark: 150 },
];

export function PolygonGraph() {
  return (
    <div className="polygonGraph">
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid gridType='polygon' radialLines={false} polarRadius={[0, 30, 60, 90, 120, 150]} />
          <PolarAngleAxis dataKey="subject" />
          <Radar name="Mike" dataKey="A"  fill="#FF0101" fillOpacity={0.7} />

          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
