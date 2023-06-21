import DataAboutUs from "../Components/AboutUs/DataAboutUs"
import Footer from "../Components/Footer"
import Login from "../Components/Logres/Login";
import Navbar from "../Components/Navbar"

function AboutUsPage() {
    const cekEmail = localStorage.getItem("account");
    const cekPassword = localStorage.getItem("pass");
    return (
      <>
       {!cekEmail && !cekPassword? (
        
        <Login/>
        
      ) : (
            <div  id="AboutUsPagee">
            <Navbar/>
            <DataAboutUs/>
            <Footer/>
            </div>
      )}
      </>
    )
}

export default AboutUsPage