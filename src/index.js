import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import todo from './reducers'

import App from './components/App';
import './index.css';

const store = createStore(todo)

render(
        <Provider store={store} >
        <App />
        </Provider>,
    document.getElementById('root')
);

store.dispatch(addTodo('Hello React!'))
store.dispatch(addTodo('HelloRedux!'))
