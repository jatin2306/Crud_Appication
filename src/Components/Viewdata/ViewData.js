import React, { useEffect, useState } from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material'
import './ViewData.css'
import UpdateForm from '../Updateform/UpdateForm'

const ViewData = () => {
const [apidata,setapidata]=useState()
const [openform,setopenform]=useState(false);
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch("https://crudcrud.com/api/2b05f7f1577a4fb5851fdd697301bb6f/unicorns").then((result) => {
      result.json().then((resp) => {
        setdata(resp)
      })
    })
  }, [])
  const handledelete=()=>{
    
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
           <Button variant="contained" color="secondary" onClick={()=>handleupdate(users)}>Update</Button>
            <Button variant="contained" color="secondary" onClick={handledelete}> 
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
