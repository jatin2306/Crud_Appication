import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Adduser from './Components/AddUser/Adduser';
import ViewData from './Components/Viewdata/ViewData';
import UpdateForm from './Components/Updateform/UpdateForm';

function App() {
  return (
<>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/add' element={<Adduser/>}/>
  <Route path='/view' element={<ViewData/>}/>
  <Route path='/update/:id' element={<UpdateForm/>}/>
  
</Routes>
</>
 
    
   
  );
}

export default App;
