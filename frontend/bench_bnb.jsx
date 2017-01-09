import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import { requestLogin } from './actions/auth_actions';
// import * as AUTH from './util/api/auth_api';

$(() => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.store = store;
  window.login = requestLogin;

  ReactDOM.render(<Root store={ store } />, root);
});
