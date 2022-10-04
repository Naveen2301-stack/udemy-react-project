import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
const Expenses = (props) => {
  const [filteredyear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredyear;
  });
  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredyear}
        onChangeFilter={filterChangeHandler}
      />
     <ExpenseList items={filteredExpense} />
    </div>
  );
};
export default Expenses;
