import "/src/css/Profile.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import EditProfile from "./EditProfile";

const Profile = () => {
  const [namaDepan, setNamaDepan] = useState("");
  const [namaBelakang, setNamaBelakang] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("Laki-laki");
  const [noHp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const {id} =useParams("2")
  useEffect(()=>{
    getUserById()
  },[])

  const handleNamaDepan = (e) => {
    setNamaDepan(e.target.value);
  };
  const handleNamaBelakang = (e) => {
    setNamaBelakang(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleJenisKelamin = (e) => {
    setJenisKelamin(e.target.value);
  };
  const handleNoHp = (e) => {
    setNoHp(e.target.value);
  };
  const handleAlamat = (e) => {
    setAlamat(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigation(`/editprofile/2`)
    // axios
    //   .get("https://63528ae6a9f3f34c37409536.mockapi.io/profile", {
    //     namaDepan: namaDepan,
    //     namaBelakang: namaBelakang,
    //     email: email,
    //     password: password,
    //     jenisKelamin: jenisKelamin,
    //     noHp: noHp,
    //     alamat: alamat,
    //   })
    //   .then((result) => {
    //     if (result.data.id == "1") {
    //       axios.post("https://63528ae6a9f3f34c37409536.mockapi.io/profile", {
    //         namaDepan: namaDepan,
    //         namaBelakang: namaBelakang,
    //         email: email,
    //         password: password,
    //         jenisKelamin: jenisKelamin,
    //         noHp: noHp,
    //         alamat: alamat,
    //       });
    //     }
    //     console.log(result.data);
    //   });
  };
  const getUserById = async()=>{
    const response = await axios.get(`https://63528ae6a9f3f34c37409536.mockapi.io/profile/${id}`);
    setNamaDepan(response.data.namaDepan);
    setNamaBelakang(response.data.namaBelakang);
    setEmail(response.data.email);
    setPassword(response.data.password);
    setJenisKelamin(response.data.jenisKelamin);
    setNoHp(response.data.noHp);
    setAlamat(response.data.alamat);

  }
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-EditProfile">
        <section>
          <div style={{ backgroundColor: "white", width:"900px", borderRadius:"4px",height:"40px"}}>
            <h3>&nbsp; Profile</h3>
          </div>
          <div className="form-profile">
            <div>
              <h2>
                Hello, {namaDepan} {namaBelakang}
              </h2>
            </div>
            <div className="col">
              <form id="form">
                <div className="row justify-content-center">
                  <div className="col">
                    <label className="form-label">Nama Depan</label>
                    <input
                      type="text"
                      className="form-control"
                      value={namaDepan}
                      onChange={handleNamaDepan}
                    />
                  </div>

                  <div className="col">
                    <label className="form-label">Nama Belakang</label>
                    <input
                      type="text"
                      className="form-control"
                      value={namaBelakang}
                      onChange={handleNamaBelakang}
                    />
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
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
                </div>

                <div className="row justify-content-center">
                  <div className="col">
                    <label className="form-label">Nomor Telepon(HP)</label>
                    <input
                      type="number"
                      className="form-control"
                      value={noHp}
                      onChange={handleNoHp}
                    />
                  </div>
                  <div className="col">
                    <label className="form-label">Jenis Kelamin</label>
                    <select
                      className="jk"
                      value={jenisKelamin}
                      onChange={handleJenisKelamin}
                    >
                      <option value=""></option>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                </div>

                <div className="col">
                  <label className="form-label">Alamat</label>
                  <input
                    type="text"
                    className="form-control"
                    value={alamat}
                    onChange={handleAlamat}
                  />
                </div>
                <div className="text-center d-grid gap-2">
                  <br />
                  
                  <button
                    type="submit"
                    className="btn btn-success btne btn-edit"
                    onClick={handleSubmit}
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Profile;
