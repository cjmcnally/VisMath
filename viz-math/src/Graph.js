import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import EquationParser from "./EquationParser";

function Graph({data}) {
    return (
        <div style={{width:'100%', height:400}} >
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="x"
                        domain={['auto', 'auto']}
                        label={{ value: 'x', position: 'bottom' }}
                        ticks={[-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                        tickFormatter={(value) => Number.isInteger(value) ? value : ''}
                    />
                    <YAxis
                        domain={['auto', 'auto']}
                        label={{ value: 'y', angle: 90, position: 'left' }}
                    />
                    <Tooltip formatter={(value) => value.toFixed(3)} />
                    <Line
                        type="monotone"
                        dataKey="y"
                        stroke="#8884d8"
                        dot={false}
                        isAnimationActive={true}
                        animationDuration={1000}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Graph;