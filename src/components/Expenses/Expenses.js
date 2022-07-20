import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";


const Expenses = (props) => {
    const [selectedFilter, setSelectedFilter] = useState('2020');

    // Reveiving the selected year from ExpensesFilter.js
    const selectYearHandler = (selectedYear) => {
        setSelectedFilter(selectedYear)
    }

    // filtering expenses array against selectedFilter
    const filteredExpenses = props.expenses.filter((expense => {
        return expense.date.getFullYear().toString() === selectedFilter
    }))

    // // store rendered content in variable
    // let expensesContent = <p>No Expenses found.</p>

    // // update content on condition
    // if (filteredExpenses.length > 0) {
    //     expensesContent = filteredExpenses.map((expense => (
    //         <ExpenseItem
    //             key={expense.id}
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date}>
    //         </ExpenseItem>
    //     )
    //     ))
    // }

    return (
        <div>
            <Card className='expenses'>
                {/*  passing the data transfer method to ExpensesFilter.js */}
                <ExpensesFilter
                    onSelectYear={selectYearHandler}
                    selected={selectedFilter}
                />
                <ExpensesChart
                    expenses={filteredExpenses}
                />
                <ExpensesList items={filteredExpenses} />
                {/* render variable rather than content */}
                {/* { expensesContent } */}

                {/* Rendering item based on condition, ternary operator variant */}

                {/* {filteredExpenses.length === 0 ? (
                    <p>No Expenses found.</p>
                ) : (
                    filteredExpenses.map((expense => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}>
                        </ExpenseItem>
                    )
                    )))} */}
            </Card>
        </div>
    )
}

export default Expenses;