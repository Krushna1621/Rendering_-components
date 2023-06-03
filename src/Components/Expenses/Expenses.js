import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const FilterExpense=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })
 
  let expenseContent=<p>No expense Found</p>
  if(FilterExpense.length>0){
     expenseContent=FilterExpense.map(expense=><ExpenseItem  key={expense.id} id={expense.id} title={expense.title}  amount={expense.amount} date={expense.date} />)

  }


  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expenseContent}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;