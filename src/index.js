import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';

ReactDOM.render(
    <Provider store={createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))}>
    <App />
    </Provider>, document.getElementById('root'));


