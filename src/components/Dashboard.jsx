import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { employeeList } from '../redux/employeeAction';
import { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import EmployeeCreation from './EmployeeCreation';

export default function Dashboard() {
   const dispatch = useDispatch();
   
   let data = useSelector((state) => {
    debugger;
    return state.employeeData
   });
   console.warn(data)

  useEffect(() => {
    dispatch(employeeList());
  }, []);
    return (

      // <div>
      
      // <div className='product-container'>
      //   {
      //     data.map((item)=><div className='product-item'>
            
      //       <div>id : {item.id} </div>
      //       <div>Name : {item.name} </div>
      //       <div>Department : {item.department} </div>
      //       <div>Address : {item.address} </div>
      //       </div>)
      //   }
      // </div>
      // </div>


      <div>
      <h1>Employee Details</h1>
      <div className="cart-page-container">
        <Table responsive striped bordered>
          <thead>
            <tr>
              <th>name</th>
              <th>code</th>
              <th>department</th>
              <th>address</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr >
                <td>{item.name}</td>
                <td>{item.code}</td>
                <td>{item.department}</td>
                <td>{item.address}</td>
                {/* <td>{item.address}</td> */}
                <td>
                  <Button variant="primary" className="mr-2">
                    Edit
                  </Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      
      <EmployeeCreation />
    </div>
  )
}
