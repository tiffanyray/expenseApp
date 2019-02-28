import moment from 'moment';

const filters = {
    text: '',
    sorty: 'date',
    startDate: undefined,
    endDate: undefined
};

const altFilters = {
    text: 'bill',
    sorty: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
};

export { filters, altFilters };