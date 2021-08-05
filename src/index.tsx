import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { customHistory, store } from './redux/store';
import AppRouter from './Router/AppRotuer';
import './index.scss';
import { Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router history={customHistory}>
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);