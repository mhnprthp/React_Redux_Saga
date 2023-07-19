import { put, takeEvery } from "redux-saga/effects";
import { EMPLOYEE_LIST, SET_EMPLOYEE_LIST, Create_Employee, Employee_Created, Employee_Creation_Failed } from "./const";

function* getEmployeeList() {
   
  let data = yield fetch("http://localhost:8000/Employees");
  data = yield data.json();
  debugger;
  yield put({ type: SET_EMPLOYEE_LIST, data });
}

function* createEmployee(action) {
  try {
    const response = yield fetch("http://localhost:8000/Employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    });

    if (response.ok) {
      yield put({ type: Employee_Created });
      yield put({ type: EMPLOYEE_LIST });
    } else {
      throw new Error("Employee creation failed");
    }
  } catch (error) {
    yield put({ type: Employee_Creation_Failed, payload: error.message });
  }
}

function* employeeSaga() {
  yield takeEvery(EMPLOYEE_LIST, getEmployeeList);
  yield takeEvery(Create_Employee, createEmployee);
}

export default employeeSaga;
