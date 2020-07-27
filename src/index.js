import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from './store/reducer'
import createSagaMiddleware from 'redux-saga'
import {watchINC} from './saga'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';

//const SagaMiddleware=createSagaMiddleware()

const logger= store =>{
  return next =>{
    return action =>{
      console.log('[MIDDLEWARE] Dispatching',action)
      const result=next(action)
      console.log('[middleware] next state',store.getState)
      return result

    }
  }
}

const store=createStore(reducer,applyMiddleware(thunk));
//SagaMiddleware.run(watchINC)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
