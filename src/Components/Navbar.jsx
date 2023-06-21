import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Navbar() {
  const navigation = useNavigate();

  const HandleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("account");
    localStorage.removeItem("token");
    localStorage.removeItem("roles");
    localStorage.removeItem("_id");
    localStorage.removeItem("username");
    // window.location.reload()
    navigation(`/`);
  };

  useEffect(() => {
    //   getData();

    const storedData = localStorage.getItem("username");
    if (storedData !== null) {
      setUsername(storedData);
      setInputValue(storedData);
    }
  }, []);

  //untuk dapetin local _id dan username yaaaa
  const getAdmin = async (e) => {
    e.preventDefault();
    const storedData = localStorage.getItem("username");
    if (storedData !== null) {
      setUsername(storedData);
      setInputValue(storedData);
    }
    console.log("admin1");
    let admin = await fetch("https://voluntegreen.onrender.com/admin");
    let result = await admin.json();

    function logUsers(result) {
      result.data.forEach((user) => {
        if (user.username == storedData) {
          console.log(user);
          console.log(user._id);
          localStorage.setItem("_id", user._id);
        }
      });
    }
    logUsers(result);
  };

  const handleBtnAdmin = async (e) => {
    e.preventDefault();
    console.log("admiiiiiiin");

    // axios("https://voluntegreen.onrender.com/admin").then((result) => {
    //   console.log(result.data);
    //   //   setDampak(result.data);
    // });

    // try {

    console.log("huaa");
    console.log(admin.data);
    console.log(admin.data.data);
    console.log(admin.data._id);

    let response = await fetch("https://voluntegreen.onrender.com/admin");
    let movie = await response.json();
    // let movie2 = await movie.json();

    // console.log(movie2);
    // console.log(data[0].map((item) => item.symbol));
    const totaldata = movie.data.length;
    console.log(totaldata);
    const countChildren = (obj) => obj.data.length;
    console.log(countChildren);

    console.log(movie.data);
    // console.log(movie.data[1].map((item) => item._id));
    console.log(movie.data[1]._id);
  };

  const [name, setUsername] = useState("");
  const [inputValue, setInputValue] = useState("");

  //   console.log(data.map((item) => item._id));

  return (
    <>
      <nav className="navbar navbar-expand-lg navbg ">
        <div className="container-fluid pohonkita">
          <Link to="/dashboard">
            <img
              className="logofix"
              src="img/logofix.png"
              alt="VolunteGreen"
              width="150"
              srcSet="img/logofix.png 300w"
              sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav navmenu1">
              {/* <!-- DROPDOWN-------------------- --> */}
              <li className="nav-item dropdown">
                <p
                  className="nav-link dropdown-toggle navmenu "
                  id="menuu"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Menu
                </p>

                <ul className="dropdown-menu" id="navdd">
                  <Link to={"/dampak"} style={{ textDecoration: "none" }}>
                    <li className="abc">
                      <a className="dropdown-item abc">
                        Informasi Dampak<br></br>Pencemaran Lingkungan
                      </a>
                    </li>
                  </Link>
                  <hr></hr>
                  {/* <li className="abc"><a className="dropdown-item abc" href="#">Informasi Pencegahan<br></br>Bencana</a></li><hr></hr> */}
                  <Link to={"/pencegahan"} style={{ textDecoration: "none" }}>
                    <li className="abc">
                      <a className="dropdown-item abc">
                        Informasi Pencegahan<br></br>Bencana
                      </a>
                    </li>
                  </Link>
                  <hr></hr>
                  {/* <li className="abc"><a className="dropdown-item abc" href="#">Artikel Informasi</a></li><hr></hr> */}
                  <Link to={"/forum"} style={{ textDecoration: "none" }}>
                    <li className="abc">
                      <a className="dropdown-item abc">Forum</a>
                    </li>
                  </Link>
                </ul>
              </li>

              {/* <!-- Menu lainnya------------------------------- --> */}
              <li className="nav-item dropdown akun">
                <Link
                  to={"/about"}
                  style={{ textDecoration: "none" }}
                  className="nav-link navmenu"
                >
                  <button onClick={getAdmin}>About Us</button>
                </Link>
              </li>
              <li className="nav-item dropdown akun">
                <Link
                  to={"/contactus"}
                  style={{ textDecoration: "none" }}
                  className="nav-link navmenu"
                >
                  Contact Us
                </Link>
              </li>

              <li className="nav-item dropdown akun">
                <Link
                  to={"/profile/2"}
                  style={{ textDecoration: "none" }}
                  className="nav-link"
                >
                  Account
                  <img src="img/avatar.png" width="60" />
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav navmenu1 akun">
              <li className="nav-item text-center dropdown ">
                <a className="nav-link navmenu" onClick={HandleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
