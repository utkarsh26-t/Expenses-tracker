import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    //Multi state approach
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    //By using single state
    // const [userInput, setUserInput] = useState({enteredAmount : '', enteredDate : '', enteredTitle : ''});

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        //alternative way, By using single state
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle : event.target.value};
        // });
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate : event.target.value};
        // });
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount : event.target.value};
        // });
    }


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,//converting to number from string amount
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }

    return (

        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input value={enteredTitle} onChange={titleChangeHandler} type="text" />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input value={enteredAmount} onChange={amountChangeHandler} type='number' min='0.01' step='0.01' />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input value={enteredDate} onChange={dateChangeHandler} type='date' min='2019-01-01' max='2022-12-31' />
                </div>
            </div>
            <div className='new-expense__actions'>
                {/* type of cancel button is set button to avoid submit of form */}
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm