'use client'
import { useState } from "react";

import ExpenseDate from "@components/Expenses/ExpenseDate"


export default function ExpenseItem (props) {
    
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Updated!");
    }

    return (
        <div className="flex items-center justify-between bg-gray-500 rounded-xl p-4 mb-4 shadow-md">
            
            <div className="text-gray-900 font-medium">
                <ExpenseDate date={props.date}></ExpenseDate>
            </div>
            <div className="flex-1 flex justify-between items-center ml-6">
                <h2 className="text-lg font-semibold text-gray-100">{title}</h2>
                <div className="bg-violet-900 text-white border-2 border-white rounded-md px-4 py-1 font-bold">
                    GHS {props.amount.toFixed(2)}</div>
            </div>
            <button onClick={clickHandler}></button>
        </div>
    )
}