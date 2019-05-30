import React from 'react';
import { redner } from 'react-dom';
import { Provider }  from 'react-redux';
import store from './store';
import App from './components/App';

redner(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
