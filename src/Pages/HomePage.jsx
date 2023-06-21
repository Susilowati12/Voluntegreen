import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import AboutUs from '../Components/HomePage/AboutUs'
import ContactUs from '../Components/HomePage/ContactUs'
import FetchDampakSinopsis from '../Components/HomePage/FetchDampakSinopsis'
import HomePageBG from '../Components/HomePage/HomePageBG'
import PenanggulanganSinopsis from '../Components/HomePage/PenanggulanganSinopsis'
import Login from '../Components/Logres/Login'
import Navbar from '../Components/Navbar'


function HomePage() {
  const cekEmail = localStorage.getItem("account");
  const cekPassword = localStorage.getItem("pass");


//   // const [name, setName] = useState('');
//   const [token, setToken] = useState('');
//   const [expire, setExpire] = useState('');
//   // const [users, setUsers] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//       refreshToken();
//       getUsers();
//   }, []);



//   const refreshToken = async () => {
//     try {
//         const response = await axios.get('http://localhost:5000/token');
//         setToken(response.data.accessToken);
//         const decoded = jwt_decode(response.data.accessToken);
//         setName(decoded.name);
//         setExpire(decoded.exp);
//     } catch (error) {
//         if (error.response) {
//           navigate("/");
//         }
//     }
// }


// const axiosJWT = axios.create();
 
//     axiosJWT.interceptors.request.use(async (config) => {
//         const currentDate = new Date();
//         if (expire * 1000 < currentDate.getTime()) {
//             const response = await axios.get('http://localhost:5000/token');
//             config.headers.Authorization = `Bearer ${response.data.accessToken}`;
//             setToken(response.data.accessToken);
//             const decoded = jwt_decode(response.data.accessToken);
//             setName(decoded.name);
//             setExpire(decoded.exp);
//         }
//         return config;
//     }, (error) => {
//         return Promise.reject(error);
//     });
 
//     const getUsers = async () => {
//         const response = await axiosJWT.get('http://localhost:5000/users', {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         });
//         setUsers(response.data);
//     }


  return (
    <>
     {!cekEmail && !cekPassword? (
      <Login/>
    ) : (
      
    <div id="HomePagee">
      <Navbar/>
        <HomePageBG/>
        <FetchDampakSinopsis/>
        <AboutUs/>
        <ContactUs/>
        {/* {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>))} */}
        <PenanggulanganSinopsis/>
        <Footer/>
    </div>    
    )}
    </>
  )
}

export default HomePage