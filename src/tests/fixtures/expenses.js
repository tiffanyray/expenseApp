import moment from 'moment';

export default [
    {
        id: '1',
        description: 'gum',
        amount: 1.99,
        note: '',
        createdAt: 0,
    },
    {
        id: '2',
        description: 'rent',
        amount: 1095.00,
        note: '',
        createdAt: moment(0).subtract(4, 'days').valueOf(),
    },
    {
        id: '3',
        description: 'credit card',
        amount: 45.00,
        note: '',
        createdAt: moment(0).add(4, 'days').valueOf(),
    },
]