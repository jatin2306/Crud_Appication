import React, { useEffect, useState } from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material'
import './ViewData.css'
import { useNavigate } from 'react-router'

const ViewData = () => {

const navigate =useNavigate()
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch("https://crudcrud.com/api/caeab3327418480f81c57a25edf8d9d7/unicorns").then((result) => {
      result.json().then((resp) => {
        setdata(resp)
      })
    })
  },[])
  const handledelete=(userid)=>{
    fetch(`https://crudcrud.com/api/caeab3327418480f81c57a25edf8d9d7/unicorns/${userid}`, {
      method: "DELETE"
    }).then(() => {
      const updatedData = data.filter(users => users._id !== userid);
      setdata(updatedData);
    }).catch((error) => console.error('Error deleting user:', error));
  }
  
const handleupdate=(olddata)=>{
navigate('/update',{state : olddata})
}
  return (
    <Table >
  <TableHead >
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Age</TableCell>
      <TableCell>Gender</TableCell>
      <TableCell>Actions</TableCell>

    </TableRow>
  </TableHead>
  <TableBody>
    {
      data.map((users,index) =>(
        <TableRow index={index}>
          <TableCell >{users.name}</TableCell>
          <TableCell>{users.age}</TableCell>
          <TableCell>{users.gender}</TableCell>
          <TableCell>
           <Button sx={{marginRight:2}} variant="contained" color="primary" onClick={()=>handleupdate(users)}>Update</Button>
            <Button variant="contained" color="secondary" onClick={()=>handledelete(users._id)}> 
              Delete
            </Button>
          </TableCell>
        </TableRow>
      )
      )
    }
  </TableBody>

</Table>
  )
}
export default ViewData
