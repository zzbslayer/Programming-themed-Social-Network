import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {reducer as Sendreducer} from './chatbot'
import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware]

const reducer = combineReducers(
    {
        messages: Sendreducer,
    }
);

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
);

export default createStore(
    reducer,
    {},
    storeEnhancers);