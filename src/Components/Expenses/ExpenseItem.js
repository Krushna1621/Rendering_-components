import React,{useState} from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title,setTitle]=useState(props.title)
  const[cola,setAmount]=useState(props.amount)
  const clickhandeler=()=>{
    setTitle('Update!')
    setAmount('40')
    console.log(cola)
    console.log(title)
  }
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{cola}</div>
      </div>
      <button onClick={clickhandeler}>Click here</button>
    </Card>
  );
}

export default ExpenseItem;
