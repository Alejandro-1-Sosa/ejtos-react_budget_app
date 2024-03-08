import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  }

  // Budget.js
useEffect(() => {
    dispatch({ type: 'UPDATE_BUDGET', payload: parseInt(newBudget, 10) });
    dispatch({ type: 'UPDATE_REMAINING' });
}, [newBudget, dispatch]);


  return (
    <div className='alert alert-secondary'>
      <span>Budget: £ {}</span>
      <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
    </div>
  );
};

export default Budget;
