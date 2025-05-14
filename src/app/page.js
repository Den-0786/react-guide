'use client'
import { useState } from "react";
import NewExpense from "@components/NewExpenses/NewExpense";
import Expense from "@components/Expenses/Expense";

const INITIAL_EXPENSES = [
    {
      id: 'e1',
      title: 'Motor Insurance',
      amount: 200.59,
      date: new Date(2019, 3, 30)
    },
    {
      id: 'e2',
      title: 'Van',
      amount: 507.45,
      date: new Date(2025, 2, 31)
    },
    {
      id: 'e3',
      title: 'food',
      amount: 1500,
      date:new Date(2024, 1, 28)
    },
    {
      id: 'e4',
      title: 'family',
      amount: 2000,
      date: new Date(2022, 0, 31)
    },
  ]


export default function Home() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  
  const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses]
      })
  }

  return (
      <div >
        <NewExpense onAddExpense={addExpenseHandler} />
        <div className="bg-white shadow-md rounded-xl p-4 max-w-lg mx-auto space-y-4">
            < Expense items={expenses}></Expense>
        </div>
      </div>
  );
}
