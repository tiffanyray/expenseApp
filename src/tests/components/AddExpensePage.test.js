import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;
beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);

});

//getting snapshot of initial add expense page
test('should render add expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

//testing onsubmit 
test('should handle onsubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);

});