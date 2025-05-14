import React from 'react';

import ChartBar from '@components/Chart/ChartBar'

export default function Chart(props) {
        
        const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
        const totalMaximum = Math.max(...dataPointValues);

        return (
            <div className='p-2 mb-4 rounded-lg bg-purple-400 flex text-center items-end justify-around h-43'>
                {props.dataPoints.map((dataPoint) => 
                <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
                >
                </ChartBar>
                )}
            </div>
        )
    }
