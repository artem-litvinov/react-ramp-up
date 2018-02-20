import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import { checkLoginStatus } from './actions/loginActions';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';

const store = configureStore();
store.dispatch(checkLoginStatus());

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,
  document.getElementById('root'));
registerServiceWorker();
