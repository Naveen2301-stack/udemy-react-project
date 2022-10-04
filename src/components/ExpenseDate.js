import React from 'react';
import './ExpensesDate.css'

export default function ExpenseDate(props) {
const month = props.date.toLocaleString('en-us',{month:'long'});
const day = props.date.toLocaleString('en-us',{day:'2-digit'});
const year = props.date.getFullYear();
  return (
    <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{day}</div>
        <div className='expenses-date__day'>{year}</div>
      </div>
  )
}
