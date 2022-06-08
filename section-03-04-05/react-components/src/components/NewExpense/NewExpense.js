import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
const NewExpense = (props) => {
    const [isEditing, seIsEditing] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expanseDate = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expanseDate);
        seIsEditing(false);
    };
    const startEditingHandler = () => {
        seIsEditing(true);
    }
    const stopEditingHandler = () => {
        seIsEditing(false);
    }
    return (
        <div className='new-expense'>
            {/* the value inside prop should be function, the convention name with starting 'on' */}
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />)}
        </div>
    );
};

export default NewExpense;