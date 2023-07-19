// import {EMPLOYEE_LIST,SET_EMPLOYEE_LIST} from "./const"


// export const employeeList = () =>{
//     return{
//         type:EMPLOYEE_LIST,
//     }
// }


import { Create_Employee, Employee_Created, Employee_Creation_Failed,EMPLOYEE_LIST } from "./const";

export const employeeList = () =>{
    return{
        type:EMPLOYEE_LIST,
    }
}

export const createEmployee = (employeeData) => ({
  type: Create_Employee,
  payload: employeeData,
});

export const employeeCreated = () => ({
  type: Employee_Created,
});

export const employeeCreationFailed = (error) => ({
  type: Employee_Creation_Failed,
  payload: error,
});
