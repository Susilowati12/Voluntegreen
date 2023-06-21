import React from 'react'

function Footer() {
  return (
        <footer className="container-xxxl ms-0 m-0 row footeredit">
            <div className="row">
        <div className="col footertitle">
            <img src="img/logofix.png" alt="" />
            <p className="text-white "> VolunteGreen merupakan sebuah website yang dikembangkan oleh beberapa Mahasiswa/i Indonesia yang mengikuti kegiatan Studi Independent di Skilvul dengan membantu mengedukasi masyarakat sekitar bersama Greenpeace</p>
        </div>
    
        
        <div className="col info">
            <ul>
            <h5>Information</h5>

            <li><a href="#" className="nav-link p-0 text-white">About Us</a></li>
            </ul>

        </div>


        
        <div className="col con">

            <ul>
            <h5>Contact Us</h5>

            <li><a href="#" className="nav-link p-0 text-white"> <img src="img/facebook-24x24-721949.png" alt="facebook"/> Facebook</a></li>
            <li><a href="#" className="nav-link p-0 text-white"> <img src="img/instagram.png" alt="instagram"/> Instagram</a></li>
            <li><a href="#" className="nav-link p-0 text-white"> <img src="img/youtube-24x24-721990.png" alt="youtube"/> Youtube</a></li>
            <li><a href="#" className="nav-link p-0 text-white"> <img src="img/tik-tok-logo-33090.png" alt="tiktok" width="24rem"/> Tiktok</a></li>
             </ul> 
        </div>
        </div>
        <h5 className="credit">© 2022 VolunteGreen</h5>
        </footer>


    
      )
}

export default Footer