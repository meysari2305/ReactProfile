import counterReducer from './features/Counter/reducer';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

let rootReducers = combineReducers({
  counter: counterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose;
let Store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));
export default Store;
