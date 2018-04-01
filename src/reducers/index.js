import { combineReducers } from 'redux';
import employees from './employees';
import sort from './sort';

const myReducer = combineReducers({
    employees,
    sort
});

export default myReducer;