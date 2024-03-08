import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    // Get the new budget value
    const newBudgetValue = parseInt(event.target.value, 10);

    // Check if the new value exceeds the limit of 20,000
    if (newBudgetValue > 20000) {
      alert('The budget cannot exceed 20,000.');
      return;
    }

    // Update the state with the new budget value
    setNewBudget(newBudgetValue);
  }

  // Budget.js
  useEffect(() => {
    // Update the budget and remaining when the new budget changes
    dispatch({ type: 'UPDATE_BUDGET', payload: newBudget });
    dispatch({ type: 'UPDATE_REMAINING' });
  }, [newBudget, dispatch]);

  return (
    <div className='alert alert-secondary'>
      <span>Budget: £ {}</span>
      <input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
    </div>
  );
};

export default Budget;

