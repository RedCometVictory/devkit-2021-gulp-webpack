// createStore for redux, applymiddleware for redux-thunk
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // displays reducers / middlewares in redux-dev-tools browser ext
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // import all reducers from ./reducers/index.js

const initialState = {}; // included inside/for all reducers

const middleware = [thunk]; //list middlewares

// pass in all reducers, initial state (applied to all reducers), and any middlewares
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;