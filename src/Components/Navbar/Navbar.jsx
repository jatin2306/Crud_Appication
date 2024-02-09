import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Tabs,
  Tab
} from "@mui/material";
import { Link } from "react-router-dom";
import "./Nav.css"
function Navbar() {
  const [list, setlist] = useState()
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container sx={{ placeItems: "center" }}>
          <Grid item xs={1}>
            <Typography>
              <Link to="/">
                CrudApp
              </Link>
            </Typography>
          </Grid>
      
          <Grid xs={11}>
            <Tabs value={list} indicatorColor="primary" onChange={(e, val) => setlist(val)}>
              <Tab label={<Link to="/">Home</Link>} />
              <Tab label={<Link to="/add">Add User</Link>} />
              <Tab label={<Link to="/view">ViewUser</Link>} />
              <Tab label={<Link to="/view">Update User</Link>} />
              <Tab label={<Link to="/view">DeleteUser</Link>} />
              <Tab label={<Link to="/addsession">Add-Session</Link>} />
              <Tab label={<Link to="/view">View-Session</Link>} />
              <Tab label={<Link to="/view">Update-Session</Link>} />
              <Tab label={<Link to="/view">Delete-Session</Link>} />
            </Tabs>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
