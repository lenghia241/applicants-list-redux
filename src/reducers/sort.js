import * as types from './../constants/ActionTypes';

var initialState = {};
var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.SORT:
            return {
                by : action.by
            };
        default:
            return state;
    }
};

export default myReducer;