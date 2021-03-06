import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import App from './components/App';
import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = compose(
  applyMiddleware(createLogger())
)(createStore)(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
