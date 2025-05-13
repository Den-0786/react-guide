import { useState } from "react";

export default function ExpenseForm (props) {
    const [enteredTitle, setEnteredTitle] =  useState('');
    const [enteredAmount, setEnteredAmount] =  useState('');
    const [enteredDate, setEnteredDate] =  useState('');



        const titleChangeHandler = (event) => {
            setEnteredTitle(event.target.value);
        }
        const amountChangeHandler = (event) => {
            setEnteredAmount(event.target.value);
        }
        const dateChangeHandler = (event) => {
            setEnteredDate(event.target.value);
        }

        const submitHandler = (event) => {
            event.preventDefault();

            const expenseData = {
                title: enteredTitle,
                amount: +enteredAmount,
                date: new Date(enteredDate)
            };

            props.onSavedExpenseData(expenseData);
            setEnteredTitle("");
            setEnteredAmount("");
            setEnteredDate("")
        };

    return (
        <form onSubmit={submitHandler}>
            <div className='flex flex-wrap gap-4'> 
                <div className="flex flex-col flex-1 min-w-[150px]">
                    <label className='font-semibold text-gray-800 mb-1 text-sm'>Title:</label>
                    <input value={enteredTitle} onChange={titleChangeHandler} type='text'
                    className='p-2 text-sm text-gray-900 rounded-md border bg-white focus:outline-none focus:ring-purple-500'
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[150px]">
                    <label className='font-semibold text-gray-800 mb-1 text-sm'>Amount:</label>
                    <input onChange={amountChangeHandler} 
                    type='number' 
                    min='0.01' 
                    value={enteredAmount}
                    step='0.01' 
                    className='p-2 text-sm text-gray-900 bg-white rounded-md border focus:outline-none focus:ring-purple-500'/>
                </div>
                <div className="flex flex-col flex-1 min-w-[150px]">
                    <label className='font-semibold text-gray-800 mb-1 text-sm'>Date:</label>
                    <input onChange={dateChangeHandler}
                    type='date'
                    min='2023-01-01' 
                    max='2025-12-31'
                    value={enteredDate}
                    className='p-2 text-sm rounded-md text-gray-900 bg-white border  focus:outline-none focus:ring-purple-500'
                    />
                </div>
            </div>
            <div className=' mt-2'>
                <button 
                type='submit'
                className="bg-purple-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-800 transition"
                >
                Add Expense</button>
            </div>
        </form>
    )
}
