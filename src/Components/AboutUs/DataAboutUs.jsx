
import "./aboutUs.css"

const DataAboutUs = () => {
    return(
        <div>
            {/* <Navbar/> */}

            <div className="card cardAboutUs ">
            
                <div className="row">
                    <h2 className="aboutUsTitle">About Us</h2>
                </div>

                <div className="row">
                    <h1 className="volunteGreenLogo">VolunteGreen</h1>
                </div>

                <div className="row contentAboutUs">
                    <p>VolunteGreen merupakan Tim yang terbentuk karena dipertemukan Skilvul. VolunteGreen juga merupakan sebuah website yang berisikan infromasi pencegahan dari dampak perubahan iklim dan informasi dampak pencemaran lingkungan. Kami juga menawarkan fitur komunitas bagi para user untuk saling berbagi informasi mengenai masalah lingkungan sekitarnya.</p>
                </div>

                {/* ANAK FRONT-END FE 11 NICHH */}
                <div className="row">
                    <h2 className="aboutUsTitle" id="titleLearnTrack">Front-End</h2>
                </div>

                <div className="d-flex justify-content-evenly profileAboutUs">
                    <div style={{}}>
                        <img src="img/AboutUsImgFirdaus.png" className="imgProfile"/>
                        <h3 className="namaDaus nama">Firdaus</h3>
                    </div>

                    <div>
                        <img src="img/AboutUsImgVania.png" className="imgProfile"/>
                        <h3 className="namaVania nama">Vania</h3>
                    </div>
                    
                    <div style={{}}>
                        <img src="img/AboutUsImgIlham.png" className="imgProfile"/>
                        <h3 className="namaIlham nama">Ilham</h3>
                    </div>

                </div>
                
                {/* ANAK BACK-END FE 11 NICHH */}
                <div className="row">
                    <h2 className="aboutUsTitle" id="titleLearnTrack">Back-End</h2>
                </div>

                <div className="d-flex justify-content-evenly profileAboutUs">
                    <div>
                        <img src="img/AboutUsImgLisa.png" className="imgProfile"/>
                        <h3 className="namaLisa nama">Lisa</h3>
                    </div>

                    <div>
                        <img src="img/AboutUsImgFebri.png" className="imgProfile"/>
                        <h3 className="namaFebri nama">Febri</h3>
                    </div>
                    
                    <div>
                        <img src="img/AboutUsImgRosy.png" className="imgProfile"/>
                        <h3 className="namaRosy nama">Rosy</h3>
                    </div>

                </div>
                <br/>
                <br/>
                <br/>
                <br/>
    
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default DataAboutUs