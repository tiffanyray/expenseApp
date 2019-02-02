import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js'
import './styles/styles.sass';
import 'normalize.css/normalize.css';

ReactDOM.render(<AppRouter />, document.getElementById('app'));