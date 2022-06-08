import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // submitHandler()
    // Option 1
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // Option 2 => update all the objects 
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });
    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // safer way to ensure the last state
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // Option 2.a
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
        // Option 2.b
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value }
        // });
    };
    const dateChangeHandler = (event) => {
        // Option 1
        setEnteredDate(event.target.value)
        // Option 2.a
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
        //Option 2.b
        // setUserInput((prevState) => {
        //     return { ...prevState, dateChangeHandler: event.target.value }
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault()
        const expanseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expanseDate);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' step='2022-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>
                    Add Expense
                </button>
            </div>
        </form>
    );
};

export default ExpenseForm;