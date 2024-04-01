import React from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { USER_AVERAGE_SESSIONS } from '../data/data';
import './AriaGraph.scss';

export function AriaGraph() {
  const data2 = USER_AVERAGE_SESSIONS[0].sessions;
  const newData = data2.map((element) => ({ day: element.day, length: element.sessionLength }));

  return (
    <div className='containerDiv'>
      <ResponsiveContainer width={258} height={260} className='container'>
        <AreaChart data={newData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>

          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="length" stroke="white" fill="none" strokeLinecap="round" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
