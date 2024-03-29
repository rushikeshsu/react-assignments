import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title, setTitle]=useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    
    const titleChangeHandler = (event) =>{
        setTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }



    return (
        <form onSubmit={submitHandler} className='expense-form'>
            <div className='controls'>
                <div className='control'>
                    <label>Title</label>
                    <input type='text' value={title} onChange={titleChangeHandler}></input>
                </div>                <div className='control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className='control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-22-31' value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='actions'>
                <button className="action_center" onClick={props.onCancel}>Cancel</button>
                <button type='submit' className='action_center'>Add</button>
            </div>
        </form>
    )
};

export default ExpenseForm;