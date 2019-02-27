import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

//test file for expense action generators

// testing setStartDate
test('should generate set start date action generator', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'START_DATE',
        startDate: moment(0)
    });
});


//testing setEndDate
test('should generate end date action generator', () => {
    const action =  setEndDate(moment(0));
    
    expect(action).toEqual({
        type: 'END_DATE',
        endDate: moment(0)
    })
});

// testing sortByDate
test('should generate sortbydate generator', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});


// testing sortByAmount
test('should generate sortbyamount generator', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})


// testing setTextFilter

test('should generate setTextFilter with default values', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate text filter with text value given', () => {
    const action = setTextFilter('hello');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'hello'
    });
});