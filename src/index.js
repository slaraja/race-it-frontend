import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import raceReducer from './reducers/raceReducer'

//App is being called as an HTMl element and being executed as function.
//We can ditch the dollar sign for interpolation.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//Function above takes in 2 args
//1. What to render on the page
//2. Where to render it on the page

reportWebVitals();
