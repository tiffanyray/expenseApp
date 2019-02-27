import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

// Testing expenses selectors
//Array for test data
const expenses = [
    {
        id: '1',
        description: 'gum',
        amount: 199,
        note: '',
        createdAt: 0,
    },
    {
        id: '2',
        description: 'rent',
        amount: 109500,
        note: '',
        createdAt: moment(0).subtract(4, 'days').valueOf(),
    },
    {
        id: '3',
        description: 'credit card',
        amount: 4500,
        note: '',
        createdAt: moment(0).add(4, 'days').valueOf(),
    },
]


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