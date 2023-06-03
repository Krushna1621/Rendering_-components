import React,{useState} from "react";
import './ExpenseForm.css';
const ExpenseForm=(props)=>{
   const [enterTitle,setEnterTitle]=useState('')
   const[enterAmount,setEnterAmount]=useState('')
   const[enterDate,setEnterDate]=useState('')
//    const[userInput,setUserInput]=useState({
//     enterTitle:'',
//     enterAmount:'',
//     enterDate:''
//    })
    const Titlechangehandler=(event)=>{
        setEnterTitle(event.target.value);
    //   setUserInput({
    //     ...userInput,
    //     enterTitle:event.target.value
    //   })
    //   console.log(userInput.enterTitle)
    //    setUserInput((prevState)=>{
    //         return {
    //             ...prevState,
    //             enterTitle:event.target.value
    //         }
    //    })
       console.log(enterTitle)
        
    }
    const Amountchangehandler=(event)=>{
       setEnterAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterAmount:event.target.value
        //   })
        
    }
    const Datechangehandler=(event)=>{
       setEnterDate(event.target.value);
    //    setUserInput({
    //     ...userInput,
    //     enterDate:event.target.value
    //   })
    }
    const Submithandler=(event)=>{
           event.preventDefault()
           const expenseData={
               title:enterTitle,
               amount:enterAmount,
               date:new Date(enterDate)
               
           }
           props.onSaveExpenseData(expenseData)
          
           setEnterTitle('')
           setEnterDate('')
           setEnterAmount('')
    }
    return(
        <div>
            <form onSubmit={Submithandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__controls ">
                        <label>Title</label>
                        <input type='text' value={enterTitle} onChange={Titlechangehandler}></input>
                    </div>
                    <div className="new-expense__controls">
                        <label>Amount</label>
                        <input type='number' min='0.01' step='0.01'  value={enterAmount}  onChange={Amountchangehandler}></input>
                    </div>
                    <div className="new-expense__controls">
                        <label>Date</label>
                        <input type='date' min='2019-01-01'  max='2023-12-31' value={enterDate} onChange={Datechangehandler}></input>
                    </div>
                </div>
                <div className="new-expense__actions">
                      <button type="submit" >AddExpense</button>
                </div>
            </form>
        </div>
    )
}
export default ExpenseForm;