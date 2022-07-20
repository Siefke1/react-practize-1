// import React, { useState } from "react";

import './ExpensesFilter.css'

const ExpensesFilter = (props) => {

    // Passing the selected Year to Expenses.js
    const yearChangeHandler = (event) => {
        props.onSelectYear(event.target.value)
    }
    return (
      <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by year</label>
          {/* listening to changes on the year select, passing it to function */}
          <select value={props.selected} onChange={yearChangeHandler}>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
          </select>
        </div>
      </div>
    );
  };

export default ExpensesFilter;