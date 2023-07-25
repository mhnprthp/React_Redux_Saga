import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployee,editEmployee} from '../redux/employeeAction';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const EmployeeCreation = (({ employeeData, handleClose }, ref) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: null,
    name: '',
    code: '',
    department: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(employeeData && employeeData.id > 0){
      dispatch(editEmployee(formData.id,formData));
      setFormData({ name: '', code: '', department: '', address: '', id: null });
      handleClose();
    }
    else{
      dispatch(createEmployee(formData));
      setFormData({ name: '', code: '', department: '', address: '', id: null });
      handleClose();
    }
  };

  useEffect(() => {
    if (employeeData) {
      setFormData({
        id: employeeData.id,
        name: employeeData.name,
        code: employeeData.code,
        department: employeeData.department,
        address: employeeData.address,
      });
    } else {
      
      setFormData({ name: '', code: '', department: '', address: '', id: null });
    }
  }, [employeeData]);

  return (
    <Container>
      <h2 className="text-center mb-4">Create New Employee</h2>
      <Form onSubmit={handleSubmit}>
       

      <Row className="mb-3">
         <Form.Group as={Col}>
         <Form.Label>Name:</Form.Label>
           <Form.Control
             type="text"
             name="name"
             value={formData.name}
             onChange={handleChange}
           />
         </Form.Group>
       </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
           <Form.Label>Code:</Form.Label>
           <Form.Control
             type="text"
             name="code"
             value={formData.code}
             onChange={handleChange}
           />
         </Form.Group>
       </Row>
       <Row className="mb-3">
         <Form.Group as={Col}>
           <Form.Label>Department:</Form.Label>
           <Form.Control
            type="text"
             name="department"
             value={formData.department}
             onChange={handleChange}
           />
         </Form.Group>
       </Row>
       <Row className="mb-3">
         <Form.Group as={Col}>
           <Form.Label>Address:</Form.Label>
           <Form.Control
             type="text"
             name="address"
            value={formData.address}
             onChange={handleChange}
           />
         </Form.Group>
       </Row>
       <div className="text-center">
         <Button type="submit">Create</Button>
       </div>

      </Form>
    </Container>
  );
});

export default EmployeeCreation;
