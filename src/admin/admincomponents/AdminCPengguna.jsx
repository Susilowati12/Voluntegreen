import axios from 'axios';
import React, { useCallback } from 'react'
import { useEffect, useState} from "react"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
// import jwtDecode from 'jwt-decode';



function AdminCPengguna() {
    const api_url = "https://testvoluntegreen.onrender.com/users";
    // const [apiUser, setApiUser] = useState([])
    const {_id} = useParams()

const [name, setName] = useState('');
const [token, setToken] = useState('');
const [expire, setExpire] = useState('');
const [apiUser, setApiUser] = useState([]);
const navigate = useNavigate();

const [user, setUser] = useState('');


// const tokenn = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODc3MzVjMmIwYWMwYjZlMTg0ODQ2ZiIsImlhdCI6MTY2OTk0NjAwMCwiZXhwIjoxNjcwMDMyNDAwfQ.FYPVIl3PRaSwZ0S8H8HcMdCkN9GsWNyv-r8P_eghLu4';

useEffect(() => {
    // refreshToken();
    getUsersBE();
    fetchData();
}, []);



// const refreshToken = async () => {
//   try {
//       const response = await axios.get('https://voluntegreen.onrender.com/admin');
//       setToken(response.data.accessToken);
//       const decoded = jwt_decode(response.data.accessToken);
//       setName(decoded.name);
//       setExpire(decoded.exp);
//   } catch (error) {
//       if (error.response) {
//         // navigate("/");
//       }
//   }
// }


// const axiosJWT = axios.create();

//   axiosJWT.interceptors.request.use(async (config) => {
//       const currentDate = new Date();
//       if (expire * 86400 < currentDate.getTime()) {
//           const response = await axios.get('https://voluntegreen.onrender.com/admin');
//           config.headers.Authorization = `Bearer ${response.data.accessToken}`;
//           setToken(response.data.accessToken);
//           const decoded = jwt_decode(response.data.accessToken);
//           setName(decoded.name);
//           setExpire(decoded.exp);
//       }
//       return config;
//   }, (error) => {
//       return Promise.reject(error);
//   });


axios.interceptors.request.use(
    config => {
        config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

const fetchData = useCallback(async () => {
    try {
        const result = await axios.get('https://voluntegreen.onrender.com/admin')
        setUser(result.data.data);
    }catch (err){
        console.log(err)
    }
})



//   const getUsers = async () => {
//       const response = await axiosJWT.get('https://voluntegreen.onrender.com/users', {
//           headers: {
//               Authorization: `Bearer ${token}`
//           }
//       });
//       setApiUser(response.data);
//   }




    
////ini jaga2 untuk getUser yang biasa testvoluntegreen
//     const getUsersBE = async () => {
//          axios.get(api_url)
//         .then(res => 
//         setApiUser(res.data.data),
//         // console.log(res.data.data)
//         )
//         .catch((err) => console.log(err))
// };

//ini untuk getUser deploy Fix API
const getUsersBE = async () => {
    axios.get('https://voluntegreen.onrender.com/admin/')
   .then(res => 
   setApiUser(res.data.data),
//    console.log(res.data.data)
   )
   .catch((err) => console.log(err))
};

    // useEffect(() => {
    // //  getUsers();
    //     getUsersBE();
    // }, []);


    // ini abaikan aja
    // const getUsers = async () => {
    //     // ini untuk get API mock biasa yaw
    //     const response = await  axios.get(api_url)
    //         console.log(response.data)
    //         setApiUser(response.data)
    // };


    // ini untuk delete fix API
    const deleteUser = async (_id) => {
        try {
            await axios.delete(`https://voluntegreen.onrender.com/admin/${_id}`);
            getUsersBE();
            console.log(_id + " has been deleted")
        } catch (error){
            console.log(error);
        }
    }

    // ini untuk delete test API BE
    // const deleteUser = async (_id) => {
    //     try {
    //         await axios.delete(`https://testvoluntegreen.onrender.com/users/${_id}`)
    //         getUsersBE();
    //         console.log(_id + "  Deleted")
    //     } catch (err){
    //         console.log(err);
    //     }
    // }

    return (
    <>
    
      {/* <!-- Begin Page Content --> */}

    <center>
    <div className="crudd">

        {/* <!-- Page Heading --> */}
        <div className="ms-4">
            <h1 className="text-gray-800">Pengguna</h1>
        </div>


        {/* <!-- /.container-fluid --> */}
        <table className="table  table-columns my-table tablee">
            <thead >
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                {/* <th>Password</th> */}
                <th>Action</th>
            </tr>
            </thead>
            {apiUser.map((item, index) => ( 
            <tbody  key={index}>
            <tr>
                <td>{item._id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                {/* <td>123</td> */}
                <td><a onClick={() => deleteUser(item._id)}><i className="fa fa-trash" aria-hidden="true" title='Delete Akun'></i></a></td>
                
            </tr>
            {/* <tr>
                <td>2.</td>
                <td>Moe</td>
                <td>mary@example.com</td>
                <td>234</td>
                <td><a><i className="fa fa-trash" aria-hidden="true"></i></a></td>

            </tr> */}
            </tbody>
                ))}

    </table>

</div>
</center>

    </>
    )
}

export default AdminCPengguna