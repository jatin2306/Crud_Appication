import React, { useState } from 'react';
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
  // Alert
} from '@mui/material';

const UpdateForm = ({apidata}) => {
  const updatevalues=({
    name : apidata?.name || '',
    age : apidata?.age || '',
    gender : apidata.gender || ''
  })
  const [updatedata,setupdatedata]=useState(updatevalues)
  const handleupdateonchange=(e)=>{
setupdatedata({...updatedata,[e.target.name]:e.target.value})
  }
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
      <Button variant="contained" color="primary">
        Update User
      </Button>
    </FormControl>
    {/* {success && (
      <Alert variant="filled" severity="success" onClose={handleSuccess}>
        Data added successfully.
      </Alert>
    )} */}
    {/* {error && (
      <Alert variant="filled" severity="error" onClose={handleError}>
        Failed to add data.
      </Alert>
    )} */}
  </FormGroup>
  )
}

export default UpdateForm
