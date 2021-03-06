import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reducer from './reducers/reducers.js';

const store = createStore(reducer);

render(
  <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
  );
  