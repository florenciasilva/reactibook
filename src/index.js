import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers/mainReducer.js';


if (process.env.NODE_ENV !== 'production') {
    let axe = require('react-axe');
    axe(React, ReactDOM, 1000);
  }

const store = createStore(reducer,
    compose(
        applyMiddleware(thunk)
    ));

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
