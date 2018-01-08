// When importing .css file, we don't have any assignment, hence lack of 'VAR from'
import 'materialize-css/dist/css/materalize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

// Provider is responsible for alerting its child components of store's state changes
ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.querySelector('#root')
);
