import React from 'react';

export default function ChartBar(props) {

    const barFillHeight = props.maxValue > 0 
    ? `${Math.round((props.value / props.maxValue) * 100)}%`
    : '0%';
    return (
        <div className="h-34 flex flex-col items-center">
            <div className='h-full w-4 border-1 border-[#313131] bg-[#c3b4f3] rounded-2xl overflow-hidden flex flex-col justify-end'>
                <div className='w-full bg-[#4826b9] transition ease-in-out' style={{height: barFillHeight}}></div>
            </div>
            <div className='font-bold text-center text-xs'>{props.label}</div>
        </div>
    );
};