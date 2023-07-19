import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployee } from '../redux/employeeAction';

export default function EmployeeCreation() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    
    name: '',
    department: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEmployee(formData));
    setFormData({name: '', department: '', address: '' });
  };

  return (
    <div>
      <h2>Create New Employee</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Department:</label>
          <input type="text" name="department" value={formData.department} onChange={handleChange} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
