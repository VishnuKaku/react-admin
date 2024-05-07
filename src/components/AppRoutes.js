import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Child from './Child'
import Parent from './Parent'
import PageNotFound from './PageNotFound'
import Nav from './Nav'
import EmpList from './EmpList'
import AddEmp from './AddEmp'
import LogOut from './LogOut'
import AdminProfile from './AdminProfile'


const AppRoutes = () => {

  const [isLoggedIn,setLoggedIn] = useState(false);
  const [adminId,setAdminId] = useState(null);
  const [authToken, setAuthToken] = useState('');

  return (
    <>

    <BrowserRouter>
    <Nav loggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/> 
      <Routes>
        {!isLoggedIn && <Route path='/login' element={<Login setLoggedIn={setLoggedIn} setAdminId={setAdminId} setAuthToken={setAuthToken}/> }></Route>}
        <Route path='/dashboard' Component={Dashboard}> </Route>
        
        {/* <Route path='/login' Component={Login}></Route> */}
        <Route path='/child' Component={Child}></Route>
        <Route path='/parent' Component={Parent}></Route>
        <Route path='*' Component={PageNotFound}></Route>
        {isLoggedIn && <Route path='/emplist' element={<EmpList />}></Route>}
        {isLoggedIn && <Route path='/addemp' Component={AddEmp}></Route>}
        {isLoggedIn && <Route path='/profile' element={<AdminProfile adminId={adminId} authToken={authToken} />}></Route>}
        <Route path='/logout' element={<LogOut setLoggedIn={setLoggedIn}/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRoutes