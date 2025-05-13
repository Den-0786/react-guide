
import ExpenseForm from "@components/NewExpenses/ExpenseForm";

export default function NewExpense(props) {

    const savedExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    return (
        <div className="bg-purple-300 p-6 rounded-xl shadow-md mb-5 mt-4 max-w-lg mx-auto">
            <ExpenseForm onSavedExpenseData={savedExpenseHandler} />
        </div>
    )

}