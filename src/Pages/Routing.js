import React from 'react'
import Home from './Home'
import About from './About'
import Profile from './Profile'
import {ProtectedRout} from './ProtectedRoutes'
import Login from './Login'
import LogOut from './LogOut'
import { UserAuthModule } from './ProtectedRoutes'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

const RoutesMain = () => {
  const protect = UserAuthModule()
  return (
    <>
       <ProtectedRout>  
        <p>Protected ROutes</p>
 
       
        <BrowserRouter>
       <NavLink style={({isActive})=>({color:isActive? "green":"blue", textDecoration:isActive?"none":"underline"})} className='mx-2' to='/'>Home</NavLink>
       <br />
       <NavLink style={({isActive})=>({color:isActive? "green":"blue", textDecoration:isActive?"none":"underline"})} className='mx-2' to='/about'>About</NavLink>
       <br />
       <NavLink style={({isActive})=>({color:isActive? "green":"blue", textDecoration:isActive?"none":"underline"})} className='mx-2' to='/profile'>Profile</NavLink> 
       <br />
       {!protect.user &&
       <NavLink style={({isActive})=>({color:isActive? "green":"blue", textDecoration:isActive?"none":"underline"})} className='mx-2' to='/login'>Login</NavLink> 
}
      {/*  (<NavLink to='/login'>Login</NavLink>)} */}
      <Routes>

  
             
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='login' element={<Login />} />
          <Route path='logout' element={<LogOut />} />
          

      </Routes>
      </BrowserRouter> 
      </ProtectedRout>
      </>
  )
}

export default RoutesMain