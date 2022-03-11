import {createStore, compose, applyMiddleware} from 'redux';
import { createEpicMiddleware} from 'redux-observable';

import rootEpic from './epics/authEpic';
import authReducer from './reducers/authReducer';

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(authReducer, composeEnhancers(
    applyMiddleware(epicMiddleware)
));
  
epicMiddleware.run(rootEpic);

export default store;