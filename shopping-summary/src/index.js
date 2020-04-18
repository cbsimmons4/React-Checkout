import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
// import {store} from './store';

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'react-thunk';
import rootReducer from './reducers';

const initialState = {};

const store = createStore (
    rootReducer,
    initialState,
    applyMiddleware(thunk)
) 

export default store;

 
ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
