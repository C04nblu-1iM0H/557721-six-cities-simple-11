import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import MessageError from './components/MessageError/MessageError';
import {store} from './store/index';
import {fetchOffersAction, checkAuthAction} from './store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <MessageError />
      <App />
    </Provider>
  </React.StrictMode>,
);
