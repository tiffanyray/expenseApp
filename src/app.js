import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import AppRouter from './routers/AppRouter.js';
import './styles/styles.sass';
import 'normalize.css/normalize.css';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill' , createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));



const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


const jsx = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));