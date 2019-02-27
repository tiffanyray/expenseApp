import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

//test file for expense action generators

//addExpense
test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'rent',
        amount: 109050,
        createdAt: 1000,
        note: 'This was last months rent'
    }

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: { 
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0,
            id: expect.any(String) 
        }
    })
});


//editExpense
test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'new note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates : {
            note: 'new note'
        }
    })
})


//removeExpense
test('should set-up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

