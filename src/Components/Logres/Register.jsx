import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerReducer } from "../../redux/registerReducer";
import Footer from "../Footer";
// import { registerUser } from "../../redux/authSlice";
// import Logo from "/public/LogresAssets/img/logo.png";
// import gunung from "./Mountain.jpg"



const Register = () => {
  const [username, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleNama = (e) => {
    setNama(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword1 = (e) => {
    setPassword1(e.target.value);
  };
  const handlePassword2 = (e) => {
    setPassword2(e.target.value);
  };


  const handleBtn = async (e) => {
       e.preventDefault();

      try {
        await axios.post('https://voluntegreen.onrender.com/signup', {
          
            username: username,
            email: email,
            password: password2
        });
        alert("Register Berhasil");
        // navigation("/");
      }catch(error){        
          alert("Mohon periksa kembali data Anda.");
      }
  




    // dispatch(registerReducer(username, email, password1, password2))
    console.log("woooi")

    // e.preventDefault();
    // axios("https://63528ae6a9f3f34c37409536.mockapi.io/logres", {
    //     nama: nama,
    //     email: email,
    //     password: password2,
    //   })
    //   .then((result) => {
    //     if (password1 == password2) {
    //       axios.post("https://63528ae6a9f3f34c37409536.mockapi.io/logres", {
    //         nama: nama,
    //         email: email,
    //         password: password2,
    //       })
    //       navigation(`/`);
    //       console.log(result.data);
    //       alert("register success");
    //     } else if(password1!==password2) {
    //       alert("Tolong cek kembali data anda");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     alert("error");
    //   });
    
  };
  return (
    <div >
      
      <div className="row" id="logre">
        <div className="col-1 volunteelore">
            <h1 style={{textAlign: "left", paddingLeft: "5rem"}}>VolunteGreen</h1>
            {/* <img id="logre"  src="/LogresAssets/img/Mountain.jpg" /> */}
        </div>

      <div className="col formm " >
     
      <section className="container-xxl" style={{display: "flex", zIndex:"2"}}>
        <div className="row">
          <div className="container">
            <form id="form " className="col-12  registerkotakk">
              <h2 className="text-center">REGISTER</h2>
              <div className="col">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="Uname-regis"
                  value={username}
                  onChange={handleNama}
                />
              </div>
              <div className="col">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email-regis"
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
                  id="password1-regis"
                  value={password1}
                  onChange={handlePassword1}
                />
              </div>
              <div className="col">
                <label className="form-label">Re-Enter Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password2-regis"
                  value={password2}
                  onChange={handlePassword2}
                />
              </div>
              <br/>
              <div className="text-center d-grid gap-2">
                <button
                  type="submit"
                  className="btn text-center btn-success"
                  // style="--bs-bg-opacity: .5;"
                  id="btn-regis"
                  onClick={handleBtn}
                >
                  Submit
                </button>
                <Link to={"/"} className="sudahpunya" style={{ textDecoration: "none" }}>
                  Sudah punya akun?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
      </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Register;
