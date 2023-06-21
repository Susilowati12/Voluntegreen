// import Logo from "/public/LogresAssets/img/logo.png";
import "/src/css/Logres.css";
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import { useDispatch } from "react-redux";
import axios from "axios";
import Footer from "../Footer";

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODc3MzVjMmIwYWMwYjZlMTg0ODQ2ZiIsImlhdCI6MTY2OTkwNzQxMiwiZXhwIjoxNjY5OTkzODEyfQ.OD_Cq5EZu5IoqXRgLh4McimBf8PD-x6gwnwr8JUAvKg'
// const api_url = 'https://voluntegreen.onrender.com/signin'

// axios.interceptors.request.use(
//   config => {
//     config.headers.authorization = `Bearer ${token}`;
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// )

const Login = () => {
  const cekEmail = localStorage.getItem("account");
  const username = localStorage.getItem("username");
  const cekPassword = localStorage.getItem("pass");
  const token = localStorage.getItem("token");
  const roles = localStorage.getItem("roles");

  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [roles, setRoles] = useState("");

  const [users, setUsers] = useState([]);
  const [requestError, setRequestError] = useState();

  const fetchData = useCallback(async () => {
    try {
      const result = await axios.get(`${api_url}`);
      setUsers(result.data.data);
    } catch (err) {
      setRequestError(err.message);
    }
  });

  // const loginn = useSelector(state => state.login)

  // axios.get('https://testvoluntegreen.onrender.com/users')
  // .then(res =>
  // // setApiUser(res.data.data),
  // console.log(res.data.data)
  // )
  // .catch((err) => console.log(err))

  useEffect(() => {
    // if(cekEmail&&cekPassword){
    //   navigation(`/dashboard`)
    // }else{
    //   navigation(`/`)
    // }
    // axios.post('https://voluntegreen.onrender.com/signin', async (req, res) => {
    //   try {
    //     const {email, password} = req.body;
    //     const user = await user.findOne({
    //       email
    //     }).lean();
    //     if (!user){
    //       return res.status(403).json({
    //         message: 'Wrong email or password.'
    //       });
    //     }
    //     const passwordValid = await verifyPassword(
    //       password,
    //     );
    //     if (passwordValid){
    //       const {password, bio, ...rest} =  user;
    //       const userInfo = Object.assign({}, {...rest});
    //       const token = createToken(userInfo);
    //       const decodedToken = jwtDecode(token);
    //       const expiresAt = decodedToken.exp;
    //       res.session.user = userInfo;
    //       res.json({
    //         message: 'Authentication Successfull!',
    //         token,
    //         userInfo,
    //         expiresAt
    //       });
    //     } else {
    //       res.status(403).jsonn({
    //         message: 'Wrong email or Password.'
    //       });
    //     }
    //   } catch (err){
    //     console.log(err);
    //     return res
    //       .status(400)
    //       .json({message: 'Something went Wrong.'});
    //   }
    // })
    // const admin = await axios.get(
    //   "https://voluntegreen.onrender.com/admin",
    //   {}
    // );
  }, []);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleBtn = async (e) => {
    e.preventDefault();
    console.log("halo");

    try {
      const respons = await axios.post(
        "https://voluntegreen.onrender.com/signin",
        {
          email: email,
          roles: roles,
          password: password,
        }
      );

      // const admin = await axios.post(
      //   "https://admin-skripsivania.onrender.com/admin"
      // );
      // console.log(admin);
      console.log(respons);
      console.log(respons.data.token);
      console.log(respons.data.username);
      console.log(respons.data.email);
      console.log(respons.data.roles);
      const obj = Object.values(respons.data.roles);
      // const propertyValues = Object.values(respons.data.email);
      // console.log(obj[0]); ini buat nampilin di console Roles nya berapa tanpa tanda ".." atau [....]

      // console.log(respons.data.roles);
      // console.log(respons);
      localStorage.setItem("account", email);
      localStorage.setItem("token", respons.data.token);
      localStorage.setItem("username", respons.data.username);
      localStorage.setItem("roles", obj);

      if (obj[0] === "63876e9ff672199d9a7a61e6") {
        localStorage.setItem("roles", roles);
        localStorage.setItem("account", email);
        localStorage.setItem("username", username);

        // console.log(roles);
        alert("Sedang memuat, silahkan menunggu.");
        // localStorage.setItem("pass", password);
        navigation("/admin");
      } else {
        localStorage.setItem("account", email);
        alert("Loading");
        // localStorage.setItem("pass", password);
        navigation("/dashboard");
      }
      // localStorage.setItem("pass", password);
      // navigation("/dashboard");
    } catch (error) {
      alert("Mohon Check kembali data Anda.");
    }

    // dispatch(loginReducer(email,password))

    // console.log("login bisa ga")
    // console.log({ email, password });
    // axios.get("https://63528ae6a9f3f34c37409536.mockapi.io/logres", {

    // })
    //   .then((result) => {
    //     if(email==""&& password==""){
    //       alert("masukkan email dan password anda");
    //     }
    //     result.data.forEach((element) => {
    //       if (element.email === email && element.password === password) {
    //         console.log("succes");
    //         navigation(`/dashboard`);
    //         localStorage.setItem("account", email);
    //         localStorage.setItem("pass", password);
    //       }
    //     });
    //   })
    //   .catch((error) => {
    //     alert(error, "Error");
    //   });
  };

  return (
    <>
      {cekEmail && cekPassword ? (
        <HomePage />
      ) : (
        <div className="container-xxxl">
          <div className="row" id="logre">
            <div className="col volunteelore">
              <h1 style={{ textAlign: "left", paddingLeft: "5rem" }}>
                VolunteGreen
              </h1>
              {/* <img id="logre"  src="/LogresAssets/img/Mountain.jpg" /> */}
            </div>

            <div className="col justify-right formmm">
              <form id="form" className="col formkotakk">
                <br />
                <br />
                <h1 className="text-center">LOGIN</h1>
                <div className="col">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email-login"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={handleEmail}
                  />
                </div>
                <div className="col">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password-login"
                    value={password}
                    onChange={handlePassword}
                  />
                </div>
                <div className="text-center d-grid gap-2">
                  <br />
                  <Link style={{ textDecoration: "none" }}>
                    <button
                      type="submit"
                      className="btn btn-success"
                      // style="--bs-bg-opacity: 0.5"
                      id="btn-login"
                      onClick={handleBtn}
                    >
                      Submit
                    </button>
                  </Link>
                  <Link to={"/register"} style={{ textDecoration: "none" }}>
                    Belum punya akun?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
export default Login;
