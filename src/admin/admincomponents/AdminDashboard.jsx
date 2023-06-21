import axios from 'axios';
import React from 'react'
import { useEffect, useState} from "react"


function AdminDashboard() {
    const api_url = "https://voluntegreen.onrender.com/admin";
    const [apiUser, setApiUser] = useState([])
    const [totalSum, setTotalSum] = useState(0);

    
    // useEffect(() => {
    //     const getData = async () => {
    //       const response = await fetch(api_url );
    //       const apiUser = await response.json();
    //       setApiUser(apiUser);
    //     //   console.timeLog(apiUser);

    //     const totalSum = apiUser.length;
    //     console.log(totalSum)
    //     };
    //     getData()
    //   }, []);

    // const getUsersBE = async () => {
    //     axios.get('https://voluntegreen.onrender.com/admin')
    //    .then(res => 
    //    setTotalSum(res.data.data.length)
    //    // console.log(res.data.data)
    //    )
    //    .catch((err) => console.log(err))
    // };
    const getUsersBE = async () => {
        axios.get(api_url)
       .then(res => 
       setTotalSum(res.data.data.length)
       // console.log(res.data.data)
       )
       .catch((err) => console.log(err))
    };

    useEffect(() => {
        getUsersBE();
    }, [])

    // useEffect(() => {
    //     const total = data.reduce((acc, row) => acc + row.amount, 0);
    //     setTotalSum(total)
    //   }, []);

    
    //   useEffect(() => {
    //     const total = apiUser.reduce((acc, row) => acc + row.amount, 0);
    //     setTotalSum(total)
    //   }, [apiUser]);


    

    return (
    <>
    
      {/* <!-- Begin Page Content --> */}
    <div className="dashboardd">

        {/* <!-- Page Heading --> */}
        <div className="ms-4">
            <h1 className="text-gray-800">Dashboard</h1>
        </div>


        {/* <!-- /.container-fluid --> */}
        <div className="ms-5 pohonadmin">
            <br></br>
            <br></br>
            <br></br>
            <img className="d-absolute " src="img/logofix.png" alt="VolunteGreen" width={350}/>
        </div>

    <div className="card cardd" style={{width: "15rem", height: "10rem"}}>
        <div className="card-body">
        <h5 className="card-title">Pengguna Akun</h5>
        <hr/>
        <p className="card-subtitle mb-2 text-muted" style={{fontSize: "12px"}}>Total</p>
        <p className="card-text">{totalSum} </p>
        </div>
    </div>
</div>


    </>
  )
}

export default AdminDashboard