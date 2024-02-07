import React, { useState } from 'react';
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
  Alert,
 
} from '@mui/material';

const UpdateForm = ({apidata}) => {
  const updatevalues=({
    name : apidata?.name || '',
    age : apidata?.age || '',
    gender : apidata?.gender || ''
  })
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [updatedata,setupdatedata]=useState(updatevalues)
  const handleupdateonchange=(e)=>{ 
setupdatedata({...updatedata,[e.target.name]:e.target.value})
  }
  const handleSuccess = () => {
    setSuccess(false);
  };

  const handleError = () => {
    setError(false);
  };
  const handleupdatesubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`https://crudcrud.com/api/e892cfd1f26c40f3876891e8c67ddef0/unicorns/${apidata._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedata),
      });
  
      if (response.ok) {
        setSuccess(true)
        setTimeout(() => {
          setSuccess(false)
        }, 2000);
      setupdatedata({
        name:'',
        age:'',
        gender:''
      })
        console.log("Data updated successfully");
      } else {
    
        console.error("Failed to update data");
      }
    } catch (error) {
    setError(false)
    setTimeout(() => {
      setError(false)
    }, 2000);
    }
  };
    return (
    <FormGroup>
    <Typography variant="h4">Update User</Typography>
    <FormControl>
      <InputLabel htmlFor="name">Full Name</InputLabel>
      <Input id="name" type="text" required name="name" onChange={handleupdateonchange} value={updatedata?.name} />
    </FormControl>
    <FormControl>
      <InputLabel htmlFor="age">Age</InputLabel>
      <Input id="age" type="number" name="age" onChange={handleupdateonchange} value={updatedata?.age} />
    </FormControl>
    <FormControl>
      <InputLabel htmlFor="gender">Gender</InputLabel>
      <Input id="gender" name="gender" onChange={handleupdateonchange} value={updatedata?.gender} />
    </FormControl>
    <FormControl>
      <Button variant="contained" color="primary" onClick={handleupdatesubmit}>
        Update User
      </Button>
    </FormControl>
    {success && (
        <Alert variant="filled" severity="success" onClose={handleSuccess}>
          Data Updated successfully.
        </Alert>
      )}
      {error && (
        <Alert variant="filled" severity="error" onClose={handleError}>
          Failed to Update data.
        </Alert>
      )}
  </FormGroup>
  )
}

export default UpdateForm
