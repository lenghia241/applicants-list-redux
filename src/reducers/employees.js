import * as types from '../constants/ActionTypes';
import { helpers, random } from 'faker';


//Find index of the employee by id
var findIndex = (tasks, id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if(task.id === id){
            result = index;
        }
    });
    return result;
}

//Genarate data...
var data = [];

for(var i=0; i<20; i++) {
    const { name, email, phone} = helpers.createCard();
    const id = random.uuid();
data.push({
    id,
    name, 
    email, 
    phone,
    });
}

var initialState = data;

var myReducer = (state=initialState, action) => {
    var index = -1;
    switch(action.type) {
        case types.SAVE_EMPLOYEE:
            var employee = {
                id : action.employee.id,
                name : action.employee.name,
                email : action.employee.email, 
                phone : action.employee.phone,
            };

            // if there is no id, generate 1 and add new employee => add news    
            if(!employee.id){
                employee.id = random.uuid();
                state.push(employee);
            // if there is id, check the position of the employee in state and change  the info base on user input => edit
            }else{
                index = findIndex(state, employee.id);
                state[index] = employee;
            }

            return [...state];
        case types.DELETE_EMPLOYEE:
            var id = action.id;
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        default:
            return state; 
    }
}

export default myReducer;