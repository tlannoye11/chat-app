import { combineReducers } from 'redux';
import appState from './sayStuff';

let rootReducer = combineReducers({
  appState
});

export default rootReducer;
