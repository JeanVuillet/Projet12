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
import './TestComp.scss';

export function TestComp() {
    const data = USER_ACTIVITY[0].sessions.map((session, index) => ({
        name: `${index + 1}`,
        kilograms: session.kilogram,
        calories: session.calories,
    }));

    return (
        <div className='leDiv' style={{ width: '500px', height: '400px' }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 40, bottom: 30 }}
                    barSize={8} // Définir la largeur des barres à 8 pixels
                >
                    <XAxis dataKey="name" />
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        domain={[0, Math.ceil(Math.max(...data.map(entry => entry.calories)) / 4.81)]} // Définir le domaine personnalisé
                        tick={({ x, y, payload }) => (
                            <text
                                x={x + 15}
                                y={y}
                                dy={4}
                                textAnchor="start"
                                fill="#666"
                                className="couou"
                            >
                                {Math.round(payload.value * 4.81)} {/* Conversion des calories en pixels */}
                            </text>
                        )}
                    />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} /> {/* Seulement les lignes horizontales */}
                    <Bar dataKey="calories" fill="#E60000" yAxisId="right" />
                    <Bar dataKey="kilograms" fill="#282D30" yAxisId="right" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

