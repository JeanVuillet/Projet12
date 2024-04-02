import React, { useEffect, useState } from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { USER_AVERAGE_SESSIONS } from '../data/data';
import './AriaGraph.scss';

export function AriaGraph() {
  const data2 = USER_AVERAGE_SESSIONS[0].sessions;
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const newData = data2.map((element, index) => ({ day: days[index], time: element.sessionLength, index: index }));

  const maxValue = Math.max(...newData.map((element) => element.time));
  const minValue = Math.min(...newData.map((element) => element.time));


  const [tooltipPayload, setTooltipPayload] = useState(null);

  useEffect(() => {
    if (tooltipPayload !== null) {
      console.log("Tooltip Payload:", tooltipPayload);
    }
  }, [tooltipPayload]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { day, time, index } = payload[0].payload;

      // Calcul de la largeur restante jusqu'à dimanche
      const remainingWidth = (7 - index) * (258 / 7); // 258 est la largeur du graphique

      setTooltipPayload(remainingWidth);

      return (
        <div className="custom-tooltip">
          <p className="label">{`${time} min`}</p>
          <div className="remaining" style={{ width:`${remainingWidth}px` , color: 'orange' }}></div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className='containerDiv'>
        <div className='payload' style={{width:`${tooltipPayload}px`}} height={200} ></div>
      <ResponsiveContainer width={258} height={260} className='container'>
        <AreaChart data={newData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} fill='none'>

          <XAxis dataKey="day" domain={[-1, 8]} padding={{ left: 20, right: 20 }} />
          <YAxis domain={[-10, maxValue]} hide={true} />
          <Tooltip content={<CustomTooltip />} isAnimationActive={false} />
          <Area dataKey="time" stroke="red" strokeWidth="2" fill="none" type='natural' />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
