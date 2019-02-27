import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

// Testing expenses selectors


//testing case for text filter
test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[2], expenses[1] ]);
});

//testing start date filter
test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined,
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[2], expenses[0] ]);
});

//testing end date filter 
test('should filter by end date filter', () => {
    const filters= {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }

    const results = selectExpenses(expenses, filters);

    expect(results).toEqual([ expenses[0], expenses[1] ]);
});

//testing sort by date
test('should sort expenses by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const results = selectExpenses(expenses, filters);

    expect(results).toEqual([  expenses[2], expenses[0], expenses[1] ]);
});


//testing sort by amount 
test('should sort expenses by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const results = selectExpenses(expenses, filters);

    expect(results).toEqual([  expenses[1], expenses[2], expenses[0] ]);
});