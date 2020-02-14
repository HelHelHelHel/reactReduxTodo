import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import filterReducer from './filterReducer';

export default combineReducers({
 simpleReducer,
 filterReducer
});