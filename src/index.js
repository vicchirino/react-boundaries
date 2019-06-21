import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';

const RELEASE = '0.1.0';
if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://303c04eac89844b5bfc908ceffc6757c@sentry.io/1289887',
    release: RELEASE,
  });
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
