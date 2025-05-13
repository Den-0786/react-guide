import ExpenseItem from "./ExpenseItem";


export default function ExpenseList(props) {
    
    let expenseContent = <p className="text-center text-gray-800">No expenses found</p>
    
    if(props.items.length > 0) {
        expenseContent = props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));

    }
    return <div>{expenseContent}</div>
};
