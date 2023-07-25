import { put, takeEvery } from "redux-saga/effects";
import {SET_EMPLOYEE_LIST,Create_Employee,Employee_Created,Employee_Creation_Failed,Employee_Edit,Employee_Delete} from "./const";
import axios from 'axios';
import { toast } from 'react-toastify';


function* getEmployeeList() {

  try {
    const response = yield axios.get("http://localhost:8001/Employees");
    const data = response.data;
    yield put({ type: SET_EMPLOYEE_LIST, data });
  } catch (error) {
    
    console.error("Error fetching employee list:", error);
    toast.error("Error Geting employee!");
  }
}


function* editEmployee(action) {
  try {
   // debugger;
    const actiondata = action.payload;
    const response = yield axios.put(`http://localhost:8001/Employees/${actiondata.id}`, actiondata.data);
    console.log(response.data)
    yield put({ type: SET_EMPLOYEE_LIST, data: response.data });
    
  } catch (error) {
    console.error("Error updating employee:", error);
    toast.error("Error updating employee!");
  }
}



function* createEmployee(action) {
  try {
    const response = yield fetch("http://localhost:8001/Employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    });

    if (response.ok) {
      yield put({ type: Employee_Created });
      yield put({ type: SET_EMPLOYEE_LIST});
      toast.success("employee Created!");
    } else {
      throw new Error("Employee creation failed");
      
    }
  } catch (error) {
    yield put({ type: Employee_Creation_Failed, payload: error.message });
    toast.error("Error Creating employee!");
  }
}

function* deleteEmployee(action) {
  try {
    const employeeIdToDelete = action.payload;
    yield axios.delete(`http://localhost:8001/Employees/${employeeIdToDelete}`);
    yield put({ type: SET_EMPLOYEE_LIST});
  } catch (error) {
   
    toast.error("Error Deleting employee!");
  }
}

function* employeeSaga() {
  yield takeEvery(SET_EMPLOYEE_LIST, getEmployeeList);
  yield takeEvery(Create_Employee, createEmployee);
  yield takeEvery(Employee_Edit,editEmployee)
  yield takeEvery(Employee_Delete, deleteEmployee); 
}

export default employeeSaga;
