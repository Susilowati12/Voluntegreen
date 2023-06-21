import React from 'react'
import FetchDampak from '../Components/Dampak/FetchDampak'
import Login from '../Components/Logres/Login';
function DampakPage() {
    const cekEmail = localStorage.getItem("account");
    const cekPassword = localStorage.getItem("pass");
      return(
          <>
            {!cekEmail && !cekPassword? (
                <Login/>
            ) : (
                <FetchDampak/>
            )}
        </>

)
}

export default DampakPage