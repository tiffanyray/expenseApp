import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

//testing the expenses reducers

//testing default
test('should set default state for expenses reducer', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
});


//testing remove expense
//trying to remove id that does exist
test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
});

//trying to remove id that doesn't exist
test('should not remove expenses if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 4
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

//Adding expense
test('should add expense', () => {
    const expense = {
        id: '3',
        description: 'new expense',
        amount: 599,
        note: '',
        createdAt: 0,
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);

});

//testing edit expense
test('should edit expense', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state[1].amount).toBe(amount);
});


//attempting to edit expense that is not found
test('should not edit expense', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});


