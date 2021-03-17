import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { getStore } from './store/authStore';

const store = getStore();

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root'),
);
