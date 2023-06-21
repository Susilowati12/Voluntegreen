import React from 'react'
import AdminSideBar from './admincomponents/AdminSideBar'
import './admin.css'
import './adminscss/_topbar.scss'
import AdminCPengguna from './admincomponents/AdminCPengguna'
import AdminTopBar from './admincomponents/AdminTopBar'
import Login from '../Components/Logres/Login'
import AdminCForum from './admincomponents/AdminCForum'

function AdminCrudForum() {
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
        <AdminCForum/>
    </div>
    </div>
    )}
    </>
  )
}

export default AdminCrudForum