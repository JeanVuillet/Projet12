import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import { USER_ACTIVITY } from './../data/data';
import'./TestComp.scss';

export function TestComp() {
    const data = USER_ACTIVITY[0].sessions.map((session, index) => ({
        name: `Session ${index + 1}`,
        kilograms: session.kilogram,
        calories: session.calories,
    }));

    return (
        <div className='leDiv' style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 40, bottom: 30 }}
                >
  
  <YAxis
  yAxisId="right"
  orientation="right"
  domain={['dataMin', 'dataMax']}
  tick={({ x, y, payload }) => (
    <text
      x={x+15}
      y={y}
      dy={4}
      textAnchor="start"
      fill="#666"
      className="couou"
    >
      {payload.value}
    </text>
  )}
/>
                    
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} /> {/* Seulement les lignes horizontales */}
                    <Bar dataKey="calories" fill="#E60000" yAxisId="right" />
                    <Bar dataKey="kilograms" fill="#E60000" yAxisId="right" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
