import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Promise from 'promise-polyfill'; 

// IE8 에서도 axios 가 문제없이 작동
if (!window.Promise) {
  window.Promise = Promise;
}

const rootElement = document.getElementById('root');
ReactDOM.render(
    <App/>, 
    rootElement
);

