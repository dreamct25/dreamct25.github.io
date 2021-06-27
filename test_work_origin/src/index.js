import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'

ReactDOM.render(
  // <React.StrictMode>
  <Router history={ createBrowserHistory() }>
    <Redirect from="/" to="/test_work/" />
    <App />
  </Router>
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
