import React from 'react'
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
import {useSelector} from 'react-redux'


const AppRoutes = () => {

  const isLoggedIn = useSelector(status=>status.admin.isLoggedIn)


  return (
    <>

    <BrowserRouter>
    <Nav /> 
      <Routes>
        {!isLoggedIn && <Route path='/login' element={<Login /> }></Route>}
        <Route path='/dashboard' Component={Dashboard}> </Route>
        
        {/* <Route path='/login' Component={Login}></Route> */}
        <Route path='/child' Component={Child}></Route>
        <Route path='/parent' Component={Parent}></Route>
        <Route path='*' Component={PageNotFound}></Route>
        {isLoggedIn && <Route path='/emplist' element={<EmpList />}></Route>}
        {isLoggedIn && <Route path='/addemp' Component={AddEmp}></Route>}
        {isLoggedIn && <Route path='/profile' element={<AdminProfile />}></Route>}
        <Route path='/logout' element={<LogOut />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRoutes