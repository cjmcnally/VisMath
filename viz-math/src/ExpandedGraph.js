import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine} from 'recharts';

function ExpandedGraph({data}) {
    return (
        <div style={{width: '100%', height: 400}}>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis
                        type="number"
                        dataKey="x"
                        domain={['auto', 'auto']}
                        label={{value: 'x', position: 'bottom'}}
                        ticks={[-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10]}
                    />
                    <YAxis
                        type="number"
                        dataKey="y"
                        domain={['auto', 'auto']}
                        label={{value: 'y', position: 'left'}}
                        ticks={[-1, -0.5, 0, 0.5, 1]}
                    />
                    <ReferenceLine y={0} stroke="#000000"/>
                    <ReferenceLine x={0} stroke="#000000"/>
                    <ReferenceLine
                        segment={
                            [
                                {
                                    x: 0,
                                    y: 0
                                },
                                {
                                    x: 0,
                                    y: 0
                                }
                            ]
                        }/>
                    <Tooltip formatter={(value) => value.toFixed(2)}/>
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

export default ExpandedGraph;
