import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import raceReducer from './reducers/raceReducer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const store = createStore(raceReducer, composeWithDevTools(applyMiddleware(thunk)));

//App is being called as an HTMl element and being executed as function.
//Store variable is defined above and can be anything
//Store next to provider is a special word that comes from the redux library
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//         <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route Path="/" exact component={App} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
//Function above takes in 2 args (before thunk)
//1. What to render on the page
//2. Where to render it on the page

reportWebVitals();
