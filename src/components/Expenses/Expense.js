import { useState } from "react";
import ExpenseFilter from "@components/Expenses/ExpenseFilter";
import ExpenseList from  "@components/Expenses/ExpenseList";


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

            <ExpenseList items={filteredExpenses}></ExpenseList>
        </div>
    );
}