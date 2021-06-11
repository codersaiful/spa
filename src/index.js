import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/elements.css'
// import App from './App';
import Menu from './components/Menu';
import Form from './items/Form';
import reportWebVitals from './reportWebVitals';
//<App />
ReactDOM.render(
  <React.StrictMode>
    <h1>Welocme to World</h1>
    <Menu />
    <Form />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
