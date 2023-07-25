import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { employeeList,deleteEmployee } from '../redux/employeeAction';
import { Table, Button,Container } from 'react-bootstrap';
import EmployeeCreation from './EmployeeCreation';
import Modal from 'react-bootstrap/Modal';

export default function Dashboard() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.employeeData);

  useEffect(() => {
    debugger;
    dispatch(employeeList());
  }, []);

  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

 

  const OnclickEdit = (selectedFormData) => {
    handleShow();
    setSelectedEmployee(selectedFormData);
  };

  const OnclickaddEmp = () => {
    setSelectedEmployee(null);
    handleShow();
  };

  const handleModalClose = () => {
  
    handleClose();
  };

  const handleDelete = (employeeId) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      dispatch(deleteEmployee(employeeId));
    }
  };

  return (
    <div>
      <h1>Employee Details</h1>
      <div className="cart-page-container">
        <Container className="d-flex justify-content-end mt-2">
    <Button variant="primary" onClick={OnclickaddEmp}>
      Add Employee
    </Button>
  </Container>
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
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.code}</td>
                <td>{item.department}</td>
                <td>{item.address}</td>
                <td>
                  <Button variant="primary" className="mr-2" onClick={() => OnclickEdit(item)}>
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Modal show={show} onHide={handleModalClose} animation={true}>
        <EmployeeCreation employeeData={selectedEmployee} handleClose={handleModalClose}  />
      </Modal>
    </div>
  );
}
