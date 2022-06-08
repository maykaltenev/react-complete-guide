import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expanseDate = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expanseDate);
    };
    return (
        <div className='new-expense'>
            {/* the value inside prop should be function, the convention name with starting 'on' */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;