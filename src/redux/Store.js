//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import employeeSaga from "./employeeSaga";
import createSagaMiddleware from "redux-saga"

// const dummyreducer =()=>{
//     return 100;
// }


//const store = createStore(RootReducer);
const sagaMiddleware = createSagaMiddleware();
const store =configureStore({reducer:RootReducer,middleware:()=>[sagaMiddleware]});
sagaMiddleware.run(employeeSaga)

export default store;     