import React, { useState } from 'react';
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
  Alert
} from '@mui/material';
import './Adduser.css';
import { Link } from 'react-router-dom';

const initialValues = {
  name: '',
  age: '',
  gender: '',
};

const Adduser = () => {
  const [formdata, setFormdata] = useState(initialValues);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [genderError, setGenderError] = useState('');

  const handleSuccess = () => {
    setSuccess(false);
  };

  const handleError = () => {
    setError(false);
  };

  const onValChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let isValid = true;
    setNameError('');
    setAgeError('');
    setGenderError('');

    if (!formdata.name.trim()) {
      setNameError('Name is required');
      isValid = false;
    }

    if (!formdata.age.trim() || isNaN(formdata.age) || formdata.age < 1 || formdata.age > 100) {
      setAgeError('Please enter a valid age between 1 and 100');
      isValid = false;
    }

    if (!formdata.gender.trim()) {
      setGenderError('Gender is required');
      isValid = false;
    }

    console.log(isValid)
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const obj = { name: formdata.name, age: formdata.age, gender: formdata.gender };

    try {
      const response = await fetch("https://crudcrud.com/api/caeab3327418480f81c57a25edf8d9d7/unicorns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);

        setFormdata(initialValues);
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      }
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <FormGroup>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel htmlFor="name">Full Name</InputLabel>
        <Input id="name" type="text" required onChange={onValChange} name="name" value={formdata.name} />
        <span className="error-message">{nameError}</span>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="age">Age</InputLabel>
        <Input id="age" type="number" onChange={onValChange} name="age" value={formdata.age} />
        <span className="error-message">{ageError}</span>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="gender">Gender</InputLabel>
        <Input id="gender" onChange={onValChange} name="gender" value={formdata.gender} />
        <span className="error-message">{genderError}</span>
      </FormControl>
      <FormControl>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add User
        </Button>
      </FormControl>
      <FormControl>
        <Link to={'/view'}>
          <Button variant="contained" color="primary" fullWidth>
            View Users
          </Button>
        </Link>
      </FormControl>
      {success && (
        <Alert variant="filled" severity="success" onClose={handleSuccess}>
          Data added successfully.
        </Alert>
      )}
      {error && (
        <Alert variant="filled" severity="error" onClose={handleError}>
          Failed to add data.
        </Alert>
      )}
    </FormGroup>
  );
};

export default Adduser;
