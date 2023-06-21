import React from 'react'

function ContactUs() {
  return (
    <>
        <div className=" container konten3">
            <div className="row contact">
                <div className="col contactus">
                <h3>Contact Us</h3>
                <ul>
                    <li><a href="#" className="nav-link p-0 text-black"> <img src="img/facebook-24x24-721949.png" alt="facebook"/> Facebook</a></li>
                    <li><a href="#" className="nav-link p-0 text-black"> <img src="img/instagram.png" alt="instagram"/> Instagram</a></li>
                    <li><a href="#" className="nav-link p-0 text-black"> <img src="img/youtube-24x24-721990.png" alt="youtube"/> Youtube</a></li>
                    <li><a href="#" className="nav-link p-0 text-black"> <img src="img/tik-tok-logo-33090.png" alt="tiktok" width="24rem"/> Tiktok</a></li>
                </ul> 
                </div>

                <div className="col">
                    <img className="container us" src="img/contact.png" width={300} />
                </div>
            </div>
        </div>
    
    </>

    )
}

export default ContactUs