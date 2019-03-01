import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenseTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';


export const ExpenseTotal = ({ expenseCount, expenseTotal }) => {
    const formattedExpensesTotal = numeral(expenseTotal).format('$0,0.00');
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';

    return (
        <div>
            <p>You are viewing {expenseCount} {expenseWord} that total {formattedExpensesTotal}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    

    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpenseTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpenseTotal);