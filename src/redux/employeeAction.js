import {SET_EMPLOYEE_LIST,Create_Employee,Employee_Created,Employee_Creation_Failed,Employee_Edit,Employee_Delete} from "./const";

export const employeeList = () =>{
    return{
        type:SET_EMPLOYEE_LIST,
    }
}

export const createEmployee = (employeeData) => ({
  type: Create_Employee,
  payload: employeeData,
});

export const employeeCreated = () => ({
  type: Employee_Created
});

export const employeeCreationFailed = (error) => ({
  type: Employee_Creation_Failed,
  payload: error,
});

export const editEmployee = (employeeId, updatedData) => ({
  type: Employee_Edit,
  payload: { id: employeeId, data: updatedData },
});

export const deleteEmployee = (employeeId) =>({
  type: Employee_Delete,
  payload: employeeId
})