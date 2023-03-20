import logo from './logo.svg';
import './App.css';
import Expense from './Expense';
import NewExpense from './NewExpense';


const App = (props) => {
  const expenses = [
    {
      id : 'e1',
      title : 'Toilet Paper',
      amount : 94.12 ,
      date : new Date (2020,7,14),
    },
    { id : 'e2', title : 'New TV', amount : 799.49 , date : new Date (2021,2,12),},
    {
      id : 'e3',
      title : 'Car Insurance' , 
      amount : 294.67 ,
      date : new Date (2021,2,28),
    },
    {
      id : 'e4' , 
      title : 'New Desk(Wooden' ,
      amount : 450 ,
      date : new Date (2021,5,12),
    },
  ];
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h5>Lets get started
        </h5>
        <Expense 
        title={expenses[0].title}
         amount={expenses[0].amount} 
         date={expenses[0].date}
         ></Expense>
        <Expense title={expenses[1].title}
         amount={expenses[1].amount} 
         date={expenses[1].date}
         ></Expense>
        <Expense  title={expenses[2].title}
         amount={expenses[2].amount} 
         date={expenses[2].date}
         ></Expense>
        <Expense  title={expenses[3].title}
         amount={expenses[3].amount} 
         date={expenses[3].date}
         ></Expense>
        <NewExpense onAddExpense={addExpenseHandler}/>
      </header>
      
    </div>
  );
}

export default App;


import React from "react";

import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';


const NewExpense = (props) => {
   const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
         ...enteredExpenseData,
         id : Math.random().toString()
      };
      props.onAddExpense(expenseData);
   };
     return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
     </div>
}

export default NewExpense;

import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
     const [enteredTitle, setEnteredTitle] = useState('');
     const [enteredAmount,setEnteredAmount] =useState('');
     const [enteredDate, setEnteredDate] = useState('');
    //  const [userInput,setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    //  })
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState,enteredTitle: event.target.value}
        // });
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value,
        // })
    }
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value,
        // })
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData =  {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
       return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Expense Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Expense Amount</label>
                <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Expense Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
       </form>
}
export default ExpenseForm;
