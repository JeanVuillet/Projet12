
import React from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { USER_AVERAGE_SESSIONS } from '../data/data';
import './AriaGraph.scss';

export function AriaGraph() {
  const data2 = USER_AVERAGE_SESSIONS[0].sessions;
  const days=['L','M','M','J','V','S','D']
  const newData = data2.map((element,index) => ({ day: days[index], time: element.sessionLength }));

  const maxValue = Math.max(...newData.map((element) => element.time));
  const minValue = Math.min(...newData.map((element)=>element.time));


  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const { time } = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p className="label">{` ${time} min`}</p>

        </div>
      );
    }
    return null;
  };
  

  return (
    <div className='containerDiv'>
      <ResponsiveContainer width={258} height={260} className='container'>
        <AreaChart data={newData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>

          <XAxis dataKey="day" domain={[-1,8]}  padding={{ left: 20, right: 20 }} />
     <YAxis  domain={[minValue-10,maxValue]}  hide={true}/>
     <Tooltip content= {<CustomTooltip/>} />
          <Area  dataKey="time" stroke="white" fill="none"  type='natural' />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}