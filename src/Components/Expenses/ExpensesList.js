import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = ({filteredExpenses}) => {
  
    if(filteredExpenses.length === 0){
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

  return (
    <ul className='expenses-list'>
        {filteredExpenses.map(item => (
        <ExpenseItem 
            key={item.id} 
            title={item.title} 
            amount={item.amount} 
            date={item.date}
        />
        ))}
    </ul>
  )
}

export default ExpensesList