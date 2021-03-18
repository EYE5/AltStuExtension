import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';

import App from './App';
import { getStore } from './store/globalStore';

import { HOST } from './constants';

axios.defaults.baseURL = HOST;

const store = getStore();

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root'),
);
