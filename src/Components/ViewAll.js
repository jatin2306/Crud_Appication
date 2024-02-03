import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Grid } from "@mui/material";
import Edit from "../Edit/Edit";

//const ViewAll = ({setUpdateValue}) => {

const ViewAll = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [props, setProps] = useState(false);
  const [props1, setProps1] = useState();

  // const handleEditClick = (id) => {
  //   navigate(/edit/${id});
  // };

  const fetchData = async () => {
    try {
      const resp = await fetch(
        https://crudcrud.com/api/40c7b99417b34f8099719a5b0db3a71d/unicorns
      );
      const json = await resp.json();
      setData(json);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleEdit = (data) => {
    debugger;
    setProps1(data);
    setProps(true);
  };
  // to={/edit/${post.username}}

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {props ? (
        <Edit data={props1} />
      ) : (
        <TableContainer component={Paper}>
          <Grid align="center">
            <h2> View All Data</h2>
          </Grid>
          <Table sx={{ minWidth: 600 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">S_No.</TableCell>
                <TableCell align="center">User Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Age</TableCell>
                <TableCell align="center">Gender</TableCell>
                <TableCell align="center">Education</TableCell>
                <TableCell align="center">Subjects</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((post, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{post.username}</TableCell>
                  <TableCell align="center">{post.email}</TableCell>
                  <TableCell align="center">{post.age}</TableCell>
                  <TableCell align="center">{post.gender}</TableCell>
                  <TableCell align="center">{post.education}</TableCell>
                  <TableCell align="center">{post.subjects}</TableCell>
                  <TableCell align="center">
                    <Link
                      variant="contained"
                      color="primary"
                      style={{ marginRight: 4 }}
                      onClick={() => handleEdit(post)}
                    >
                      Edit
                    </Link>
                    {/* <Button variant="contained" color="secondary" onClick={()=>{setUpdateValue(post);navigate("/edit") }}>Edit</Button> */}
                    <Button variant="contained" color="secondary">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>

    //       <div align="center">
    //       <h2>View All Data</h2>
    //         <table border={1}>
    //           <thead>
    //             <tr>
    //                <th>User Name</th>
    //                <th>Email</th>
    //                <th>Age</th>
    //                <th>Gender</th>
    //                <th>Education</th>
    //                <th>Subjects</th>
    //                <th>Action</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //         {data.map(post => (
    //           <tr>
    //             <td>{post.username}</td>
    //             <td>{post.email}</td>
    //             <td>{post.age}</td>
    //             <td>{post.gender}</td>
    //             <td>{post.education}</td>
    //             <td>{post.subjects}</td>
    //             <td>
    //               <button>Edit</button>
    //               <button>Delete</button>
    //               {/* <Button component={Link} to="/edit" color="green">Edit</Button> */}
    //             </td>
    //           </tr>
    //         ))}
    //        </tbody>
    //     </table>
    // </div>
  );
};

export default ViewAll;