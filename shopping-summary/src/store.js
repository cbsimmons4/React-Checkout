import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'react-thunk';
import rootReducer from './reducers';

const initialState = {};

const store = createStore (
    rootReducer,
    initialState,
    applyMiddleware(thunk)
) 

export default store;