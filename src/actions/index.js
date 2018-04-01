import * as types from '../constants/ActionTypes';

export const saveEmployee = (employee) => {
    return {
        type: types.SAVE_EMPLOYEE,
        employee
    }
}

export const deleteEmployee = (id) => {
    return {
        type: types.DELETE_EMPLOYEE,
        id
    }
}

export const sortEmployee = (by) => {
    return {
        type: types.SORT,
        by
    }
}