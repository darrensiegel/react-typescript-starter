import 'babel-polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

import thunkMiddleware from 'redux-thunk';

var createLogger = require('redux-logger');

import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';

interface RR {
    Provider: any;
}

var Provider = (require('react-redux') as RR).Provider;


const loggerMiddleware = (createLogger as any)();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch async actions
  loggerMiddleware // middleware that logs actions
)(createStore);

//const store = createStoreWithMiddleware((rootReducer as <A extends Action>(state: any, action: A) => any));

const store = createStoreWithMiddleware(rootReducer);


import Main from './Main';

ReactDOM.render(
    <Provider store={store}>
      <Main/>
    </Provider>,
  document.getElementById('app')); // jshint ignore:line
