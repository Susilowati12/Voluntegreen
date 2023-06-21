import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function AdminSideBar() {


    const navigation = useNavigate();

    const HandleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem("account")
        localStorage.removeItem("token")
        localStorage.removeItem("roles")
        localStorage.removeItem("username")
        localStorage.removeItem("geo-location")
        // window.location.reload()
        navigation(`/`)
    };

return (


    
    <div className='sidebarr'>


        
{/* <!-- Sidebar --> */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">VOLUNTEGREEN</div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"/>

            {/* <!-- Nav Item - Dashboard --> */}
            <Link to="/admin" style={{textDecoration: 'none'}}><li className="nav-item active">
                <a className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li></Link>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <Link to="/admin-crud" style={{textDecoration: 'none'}}>
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Manage User Account </span>
                </a>
            </li></Link>
            
            <Link to="/admin-forum" style={{textDecoration: 'none'}}>
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Manage Forum Post </span>
                </a>
            </li></Link>

            
           

          

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block"/>
            <hr className="sidebar-divider d-none d-md-block"/>
            <hr className="sidebar-divider d-none d-md-block"/>
            <hr className="sidebar-divider d-none d-md-block"/>
            <hr className="sidebar-divider d-none d-md-block"/>
            <hr className="sidebar-divider d-none d-md-block"/>
            <hr className="sidebar-divider d-none d-md-block"/>
            <hr className="sidebar-divider d-none d-md-block"/>
            <hr className="sidebar-divider d-none d-md-block"/>
            <hr className="sidebar-divider d-none d-md-block"/>
            <hr className="sidebar-divider d-none d-md-block"/>
            <hr className="sidebar-divider d-none d-md-block"/>
            <hr className="sidebar-divider d-none d-md-block"/>
            <hr className="sidebar-divider d-none d-md-block"/>
            <hr className="sidebar-divider d-none d-md-block"/>
            


            {/* <!-- Sidebar Message --> */}
            <div className="sidebar-card d-lg-flex logoutAdmin">
                {/* <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."/> */}
                <p className="text-center mb-2">Thankyou, see you again!</p>
                <a onClick={HandleLogout} className="btn btn-success btn-sm " href="https://startbootstrap.com/theme/sb-admin-pro">Logout</a>
            </div>

        </ul>
        {/* <!-- End of Sidebar --> */}




    {/* <Outlet/> */}
    </div>
  )
}

export default AdminSideBar