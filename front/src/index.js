import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import configureStore from "./store";

const store = configureStore();
window.store = store;

const rootElement = document.getElementById('root')
ReactDOM.render (
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
)