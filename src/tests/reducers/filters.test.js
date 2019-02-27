import filtersReducer from '../../reducers/filters';
import moment from 'moment';

//testing filters reducers file

//Testing default set up values
test('should setup default filter values', () => {
    const state = filtersReducer( undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

//testing sort by amount 
test('should set sort by to amount ', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});

    expect(state.sortBy).toBe('amount');
})

//testing sort by date
test('should set sort by to date', () => {
    //need to start of with sort by not the default: date.
    const currentState = {
        text: '',
        sortBy:  'amount',
        startDate: undefined,
        endDate: undefined
    }; 
    const action = { type: 'SORT_BY_DATE' };

    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');
});

//testing set text filter 
test('should set text filter', () => {
    const text = 'my filter';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined, action);

    expect(state.text).toBe(text);
});

//testing start date filter 
test('should set start date filter', () => {
    const startDate = moment();
    const action = {
        type: 'START_DATE',
        startDate
    };
    const state = filtersReducer(undefined, action);

    expect(state.startDate).toBe(startDate);
});

//testing end date filter
test('should set end date filter', () => {
    const endDate = moment();
    const action = {
        type: 'END_DATE',
        endDate
    };
    const state = filtersReducer(undefined, action);

    expect(state.endDate).toBe(endDate);
});