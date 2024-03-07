import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);
    const [remaining, setRemaining] = useState(budget - calculateTotalExpenses(expenses));

    useEffect(() => {
        // Update remaining whenever the budget or expenses change
        setRemaining(budget - calculateTotalExpenses(expenses));
    }, [budget, expenses]);

    // Determine the style class based on whether the total expenses exceed the budget
    const alertType = remaining < 0 ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{remaining}</span>
        </div>
    );
};

// Helper function to calculate total expenses
const calculateTotalExpenses = (expenses) => {
    return expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
};

export default Remaining;


