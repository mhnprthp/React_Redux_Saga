import {SET_EMPLOYEE_LIST,Create_Employee,Employee_Created,Employee_Creation_Failed,Employee_Edit,Employee_Delete} from "./const";

export const employeeData = (state=[], action) => {
switch (action.type) {
  // case EMPLOYEE_LIST:
  //   // You should handle the case when action.data is not iterable (e.g., not an array)
  //   // If it's not iterable, you can return the state as is or an empty array based on your requirements.
  //   return Array.isArray(action.data) ? [...action.data] : state;
  case SET_EMPLOYEE_LIST:
    return Array.isArray(action.data) ? [...action.data] : state;
  case Employee_Created:
    return state;
  case Employee_Creation_Failed:
    return state;
    case Employee_Delete:
    const employeeIdToDelete = action.payload;
    return state.filter((employee) => employee.id !== employeeIdToDelete);
  default:
    return state;
}


};


