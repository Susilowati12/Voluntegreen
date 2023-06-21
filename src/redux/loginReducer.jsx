import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import Login from "../Components/Logres/Login";
import HomePage from "../Pages/HomePage";
// import { Link, useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";


// function navigation(params){
//     return{
//         type: NAVIGATE,
//         payload: params
//     }
// }


export const loginReducer = (email, password) => {
    // const navigation = useNavigate();
    return (e) => {
      // e.preventDefault();

      // try {
      //   axios.post('https://testvoluntegreen.onrender.com/signin', {
      //     email: email,
      //     password: password
      //   });
      //   // navigation("/dashboard");
      //   <HomePage/>
      // }catch(error){
        
      //     alert("Mohon Check kembali data Anda.");
        
      // }

      // --------------------------------------------------------------------------------
      // console.log(email,password)
      // axios.post("https://testvoluntegreen.onrender.com/signin", {
      //   email: email,
      //   password: password,
      // })
      //   .then((result) => {
      //     if(email==""&& password==""){
      //       alert("masukkan email dan password anda");
      //     }
      //     result.data.data.forEach((element) => {
      //       if (element.email === email && element.password === password) {
      //         console.log("succes");
      //         <HomePage/>
            
      //         localStorage.setItem("account", email);
      //         localStorage.setItem("pass", password);
      //       }
      //     });
      //   })
      //   .catch((error) => {
      //     alert(error, "Error");
      //   });
    }
}