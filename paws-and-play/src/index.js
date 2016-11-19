import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Router, browserHistory } from 'react-router';

import { Provider } from 'react-redux';

import ReduxPromise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(ReduxPromise))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
