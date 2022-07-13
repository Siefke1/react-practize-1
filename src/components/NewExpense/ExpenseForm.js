
import React, { useState } from 'react';

import './ExpenseForm.css';


const ExpenseForm = () => {
    // MULTIPLE USE STATE APPROACH:
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('') 
    const [enteredDate, setEnteredDate] = useState('') 

    // SINGLE USE STATE APPROACH
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        // MULTIPLE USE STATE APPROACH:
        setEnteredTitle(event.target.value)

        // SINGLE STATE BAD PRACTIZE
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        // SINGLE STATE BEST PRACTIZE
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredTitle: event.target.value }
    //     })
    }

    const amountChangeHandler = (event) => {
        // MULTIPLE USE STATE APPROACH:
        setEnteredAmount(event.target.value)

        // SINGLE STATE BAD PRACTIZE
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })

        // SINGLE STATE BEST PRACTIZE
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredAmount: event.target.value }
    //     })
    }

    const dateChangeHandler = (event) => {
        // MULTIPLE USE STATE APPROACH:
        setEnteredDate(event.target.value)

        // SINGLE STATE BAD PRACTIZE
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })

        // SINGLE STATE BEST PRACTIZE
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredDate: event.target.value }
    //     })
    }

    console.log(enteredTitle)
    console.log(enteredAmount)
    console.log(enteredDate)

    const submitHandler = (event) => {
        event.preventDefault();

        // This object would already exist in single state approach
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2025-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'> Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm