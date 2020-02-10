import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import Service from './mock-data/service';
import ServiceContext from './ServiceContext';

const service = new Service();

ReactDOM.render((
  <ServiceContext.Provider value={service}>
    <App />
  </ServiceContext.Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
