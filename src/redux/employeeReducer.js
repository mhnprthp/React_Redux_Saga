
import { EMPLOYEE_LIST, SET_EMPLOYEE_LIST, Employee_Created, Employee_Creation_Failed } from "./const";

export const employeeData = (state = [], action) => {
  switch (action.type) {
    case EMPLOYEE_LIST:
      return [...action.data]
    case SET_EMPLOYEE_LIST:
      debugger;
      return [action.data, ...state];
    case Employee_Created:
      return state; 
    case Employee_Creation_Failed:
      return state; 
    default:
      return state;
  }
};


// s