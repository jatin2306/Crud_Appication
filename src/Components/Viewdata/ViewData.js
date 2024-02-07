import React, { useEffect, useState } from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material'
import './ViewData.css'
import UpdateForm from '../Updateform/UpdateForm'

const ViewData = () => {
const [apidata,setapidata]=useState()
const [openform,setopenform]=useState(false);
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch("https://crudcrud.com/api/e892cfd1f26c40f3876891e8c67ddef0/unicorns").then((result) => {
      result.json().then((resp) => {
        setdata(resp)
      })
    })
  },[])
  const handledelete=(userid)=>{
    fetch(`https://crudcrud.com/api/e892cfd1f26c40f3876891e8c67ddef0/unicorns/${userid}`, {
      method: "DELETE"
    }).then(() => {
      const updatedData = data.filter(users => users._id !== userid);
      setdata(updatedData);
    }).catch((error) => console.error('Error deleting user:', error));
  }
  
const handleupdate=(olddata)=>{
  setapidata(olddata)
setopenform(true)
}
  return (
<>
{openform? (<UpdateForm apidata={apidata}/>):
(    <Table >
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

</Table>)}



</>
  )
}
export default ViewData
