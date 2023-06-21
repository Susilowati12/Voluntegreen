import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './css/PenanggulanganSinopsis.css'

import { Routes, Route } from 'react-router-dom'
// import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'
import PenanggulanganPage from './Pages/PenanggulanganPage'

import './css/readmore.css'
// import Testing from './Components/Testing'
import Login from "./Components/Logres/Login";
import Register from "./Components/Logres/Register";

import AdminPage from './admin/AdminPage'
import AdminCrud from './admin/AdminCrud'
import EditProfile from './Components/Akun/EditProfile'
import Profile from './Components/Akun/Profile'
import KomunitasPage from './Pages/KomunitasPage'
import DampakPage from './Pages/DampakPage'
import AboutUsPage from './Pages/AboutUsPage'
import ContactUsPage from './Pages/ContactUsPage'
import AdminCrudForum from './admin/AdminCrudForum'
// import Forum from './Pages/Forum'
// import './css/style-penanggulangan.css'

function App() {

  return (
    <>
    
      {/* <Navbar/> */}
      {/* <Testing/> */}
      <Routes>
        <Route path="/" element={<Login/>}/> 
        <Route path="/register" element={<Register/>}/> 
        {/* <Route element={<ProtectedRoutes/>}> */}
          <Route path="/pencegahan" element={<PenanggulanganPage/>}/>
          <Route path="/dashboard" element={<HomePage/>} />
          
          <Route path="/dampak" element={<DampakPage/>}/>
        {/* </Route> */}
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/admin-crud" element={<AdminCrud/>}/>
        <Route path="/admin-forum" element={<AdminCrudForum/>}/>
        {/* <Route path="/forum" element={<Forum/>}/>  */}
        <Route path="/about" element={<AboutUsPage/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
        <Route path='/editprofile/:id' element={<EditProfile/>}/>
        <Route path="/forum" element={<KomunitasPage/>}/>
        <Route path="/contactus" element={<ContactUsPage/>}/>
      </Routes>
      {/* <Footer/> */}
    </>
  
    )
}

export default App
