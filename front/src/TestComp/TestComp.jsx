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
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="kilograms" fill="#282D30" />
                    <Bar dataKey="calories" fill="#E60000" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
