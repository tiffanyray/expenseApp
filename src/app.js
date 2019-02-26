import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense} from './actions/filters';
import {setTextFilter} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import AppRouter from './routers/AppRouter.js';
import './styles/styles.sass';
import 'normalize.css/normalize.css';

const store = configureStore();

store.disptch(addExpense({description: 'water bill', }));

ReactDOM.render(<AppRouter />, document.getElementById('app'));