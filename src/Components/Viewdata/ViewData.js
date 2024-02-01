import React, { useEffect, useState } from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material'
import './ViewData.css'
import { Link } from 'react-router-dom'

const ViewData = () => {

  const [data, setdata] = useState([])
  useEffect(() => {
    fetch("https://crudcrud.com/api/e1fa77f7438545a08df575bbe4a7affb/unicorns").then((result) => {
      result.json().then((resp) => {
        setdata(resp)
      })
    })
  }, [])

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
               <Link to={`/update/${users.name}` }>
               <Button variant="contained" color="secondary">Update</Button>
               </Link>
                <Button variant="contained" color="secondary">
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
