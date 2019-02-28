import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';
import {Route,BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <Provider store={createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))}>
        <BrowserRouter>
            <Route path="/" component = {App}/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));


