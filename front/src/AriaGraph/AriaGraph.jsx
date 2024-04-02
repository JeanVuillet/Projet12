import React from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { USER_AVERAGE_SESSIONS } from '../data/data';
import './AriaGraph.scss';

export function AriaGraph() {
  const data2 = USER_AVERAGE_SESSIONS[0].sessions;
  const newData = data2.map((element) => ({ day: element.day, length: element.sessionLength }));
  const maxValue = Math.max(newData);
  const minValue = Math.min(newData);
  return (
    <div className='containerDiv'>
      <ResponsiveContainer width={258} height={260} className='container'>
        <AreaChart data={newData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>

          <XAxis dataKey="day" />
     <YAxis  domain={[minValue,maxValue]}/>
     <Tooltip label="length" />
          <Area  dataKey="length" stroke="white" fill="none" strokeLinecap="round" type='natural' />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
