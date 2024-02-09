import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import Adduser from './AddUser/Adduser'
import ViewData from './Viewdata/ViewData'
import UpdateForm from './Updateform/UpdateForm'

const Routers = () => {
  return (
<>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/add' element={<Adduser/>}/>
  <Route path='/view' element={<ViewData/>}/>
  <Route path='/update' element={<UpdateForm/>}/>
</Routes>
</>
  )
}

export default Routers