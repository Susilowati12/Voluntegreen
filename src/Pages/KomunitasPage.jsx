import Footer from "../Components/Footer"
import Komunitas from "../Components/Komunitas/KomunitasUpload"
import KomunitasUploaded from "../Components/Komunitas/KomunitasUploaded"
import Login from "../Components/Logres/Login"
import Navbar from "../Components/Navbar"

const KomunitasPage = () => {
const cekEmail = localStorage.getItem("account");
  const cekPassword = localStorage.getItem("pass");
    return(
        <>
        {!cekEmail && !cekPassword? (
            <Login/>
        ) : (
        
            <div id="komunitasPage">
                <Navbar/>
                <Komunitas/>
                <KomunitasUploaded/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Footer/>

            </div>
            
        )}
        </>
    )
}

export default KomunitasPage