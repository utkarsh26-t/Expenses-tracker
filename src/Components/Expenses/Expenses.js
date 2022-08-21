import React, {useState} from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = ({ expenses }) => {

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (pickedYear) => {
        const year = pickedYear;
        setFilteredYear(year);
    }

    //Since we have added state to year, so whenever year changes, its state also changes
    //Since the state has changed, then the component in which this state has changed,gets re-evaluated again
    //that state in our case is Expenses component
    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList filteredExpenses={filteredExpenses}/>
        </Card>
    )
}

export default Expenses