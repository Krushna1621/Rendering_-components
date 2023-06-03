import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense=(props)=>{
    const onSaveExpenseDatahandler=(enterdExpenseData)=>{
        const expenseData={
            ...enterdExpenseData,
            id:Math.random().toString()
        }
        console.log(expenseData)
        props.onadddata(expenseData)

    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDatahandler}></ExpenseForm>
        </div>
    )
}
export default NewExpense;