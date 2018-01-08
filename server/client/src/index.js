// When importing .css file, we don't have any assignment, hence lack of 'VAR from'
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import actions from './actions';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// Provider is responsible for alerting its child components of store's state changes
ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.querySelector('#root')
);
