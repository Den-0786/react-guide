import { useState } from "react";
import ExpenseFilter from "@components/Expenses/ExpenseFilter";
import ExpenseList from  "@components/Expenses/ExpenseList";
import ExpenseChart from "./ExpenseChart";


export default function Expense (props) {
    const [filteredYear, setFilterYear] = useState(2025);

    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
    };
    
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString()=== filteredYear
    });

    
    

    return (
        <div>
            <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpenseFilter>
            <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
            <ExpenseList items={filteredExpenses}></ExpenseList>
        </div>
    );
}