import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Login from "../Components/Logres/Login";



export const registerReducer = ( username, email, password1, password2) => {
  // const navigation = useNavigate();

    return () => {
    // axios.post("https://63528ae6a9f3f34c37409536.mockapi.io/logres", {
    //     username: username,
    //     email: email,
    //     password: password2,
    //   }) 
    //   .then((result) => {
    //     if (password2 == "") {
    //       alert("Tolong cek kembali data Anda.")
    //       // navigation(`/`);
    //     //   console.log(result.data);
    //     } else if(password1 == password2) {
    //       console.log(result.data)
    //       alert("Register Berhasil.");
    //       // navigation(<Login/>)
    //     } else{
    //       alert("Tolong Cek Kembali data Anda.")
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     alert("error");
    //   });
    }
}