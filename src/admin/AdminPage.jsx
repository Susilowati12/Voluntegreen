import React from 'react'
import AdminSideBar from './admincomponents/AdminSideBar'
import './admin.css'
import './adminscss/_topbar.scss'
import AdminTopBar from './admincomponents/AdminTopBar'
import AdminDashboard from './admincomponents/AdminDashboard'
import Login from '../Components/Logres/Login'
import Footer from '../Components/Footer'

function AdminPage() {
  const cekEmail = localStorage.getItem("account");
  const cekPassword = localStorage.getItem("pass");
  return (
    <>
     {!cekEmail && !cekPassword? (
      
      <Login/>
      
    ) : (
    <div className="page-top" id="adminpagee">
    
    {/* <!-- Page Wrapper --> */}
    <div id="wrapper">
        <AdminSideBar/>
        <AdminTopBar/>
        <AdminDashboard/>
        
    </div>
    </div>
    )}
    </>
  )
}

export default AdminPage