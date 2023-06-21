import recycleImg from '../../assets/assets-penanggulangan/recycle-img.png'
import reduceImg from '../../assets/assets-penanggulangan/reduce-img.png'
import reuseImg from '../../assets/assets-penanggulangan/reuse-img.png'
import pencemaranAirImg from '../../assets/assets-penanggulangan/pencemaran-air-img.png'
import himbauan1Img from '../../assets/assets-penanggulangan/himbauan-1.png'
import himbauan2Img from '../../assets/assets-penanggulangan/himbauan-2.png'
import himbauan3Img from '../../assets/assets-penanggulangan/himbauan-3.png'
import himbauan4Img from '../../assets/assets-penanggulangan/himbauan-4.png'

const Penanggulangan = () => {
    return(
        <>
        

            <br/><br/>


        <div className="container penanggulangan2">
            <div className="row">
            <div className="col"> 

            <div className="box-item col-4" style={{width: "200px", marginLeft: "-10px"}}>
                <div className="flip-box">

                    <div className="flip-box-front text-center responKotak" style={{backgroundColor: "#91DF89"}}>
                        <div className="inner colo-white">
                            <h1 className="flip-box-header">Recycle</h1>
                            <img src={recycleImg} id="img-3R"/>
                        </div>
                    </div>
                    
                    <div className="flip-box-back text-center responKotak" style={{backgroundColor: "#91DF89"}}>
                        <div className="inner colo-white">
                            <h1 className="flip-box-header">Recycle</h1>
                            <p id="text-card">
                                Recycle bermanfaat untuk melestarikan sumber daya alam, 
                                mengurangi jumlah limbah, sampah, dan polusi, menghemat 
                                energi, menghemat uang, dan juga menciptakan lapangan 
                                pekerjaan baru terutama di industri daur ulang.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            </div>

            <div className="col">

                <div className="box-item col4" style={{width: "200px", marginLeft: "2px"}}>
                    <div className="flip-box">
    
                        <div className="flip-box-front text-center responKotak geserBang" style={{backgroundColor: "#018071"}}>
                            <div className="inner colo-white ReduceImg">
                                <h1 className="flip-box-header">Reduce</h1>
                                <img className='' src={reduceImg} id="img-3R imgReduce"/>
                            </div>
                        </div>
                        
                        <div className="flip-box-back text-center responKotak geserBang" style={{backgroundColor: "#018071"}}>
                            <div className="inner colo-white">
                                <h1 className="flip-box-header">Reduce</h1>
                                <p id="text-card">Kegiatan manusia yang menyebabkan pencemaran lingkungan antara lain Kegiatan transportasi, industri, penambangan, pertanian dan lain lain..
                                    Semua kegiatan tersebut di lakukan untuk memenuhi kebutuhan manusia yang terus meningkat, baik jumlah maupun jenisnya. 
                                </p>
                            </div>
                        </div>
    
                    </div>
                </div>
                
                </div>

                <div className="col">
                    
                    <div className="box-item col-4" style={{width: "200px", marginLeft: "-10px"}}>
                        <div className="flip-box">
        
                            <div className="flip-box-front text-center responKotak geserBang" style={{backgroundColor: "#08B88A"}}>
                                <div className="inner colo-white">
                                    <h1 className="flip-box-header">Reuse</h1>
                                    <img src={reuseImg} id="img-3R"/>
                                </div>
                            </div>
                            
                            <div className="flip-box-back text-center responKotak geserBang" style={{backgroundColor: "#08B88A"}}>
                                <div className="inner colo-white">
                                    <h1 className="flip-box-header">Reuse</h1>
                                    <p id="text-card">Memanfaatkan sampah atau limbah atau barang yang sudah tidak dipakai untuk kepentingan 
                                        yang sama dengan peruntukan semula. Contohnya botol minuman dari gelas yang telah diminum isinya, kemudian 
                                        diserahkan lagi ke pengecer.
                                    </p>
                                </div>
                            </div>
        
                        </div>
                    </div>
            
                    </div>

        </div>
    </div>

    <br/>
    <br/>

    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <br/>
                <a id="judul2">Pengendalian</a>
                <a id="judul2">Pencemaran air</a>
                <p id="pencemaran">
                    Pencemaran air terjadi dimana - mana, apalagi didaerah perkotaan yang penduduknya padat dan terdapat berbagai 
                    jenis industri. Jika pencemaran air tidak dikendalikan, maka mansua akan menangungg akibatnya, yaitu munculnya berbagai 
                    jenis penyakit Pengendalian pencemaran air mencakup upaya pencegahan, penanggulangan dari sumber - sumber pencemar, dan 
                    atau pemulihan kualitas air pada sumber - sumber ai. Tujuannya adalah agar air dapat dimanfaatkan secara terus menenerus 
                    sesuai dengan peruntukannya.
                </p>
            </div>

            <div className="col gambar-pencemaran">
                <center>
                <img src={pencemaranAirImg} id="" style={{marginTop:"2rem", borderRadius: "20px"}}/>
                </center>
            </div>
        </div>
    </div>

    <br/><br/>
        <div className='container'>

        <div className="row" style={{paddingLeft: "2rem"}}>
            <center>
                <div className="col">
                    <div className="card" style={{width: "15rem", minHeight:"300px", borderRadius: "35px", backgroundColor: "#018071", border: "none"}}>
                        <p className="himbauan">Tidak membuang sampah dan <br/> bahan - bahan pencemar ke sungai, danau dan laut</p>
                        <img src={himbauan1Img} style={{width: "70%", height: "10em", marginLeft: "60px"}}/>
                    </div>
                </div>
            </center>


            <center>
            <div className="col">
                <div className="card" style={{width: "15rem", minHeight:"300px", borderRadius: "35px", backgroundColor: "#08B88A", border: "none"}}>
                    <p className="himbauan">Jika terpaksa harus membuang ke sungai, limbah di olah terlebih dahulu agar tidak membahayakan lingkungan</p>
                    <img src={himbauan2Img} style={{width: "45%", height: "7em", marginLeft: "90px"}}/>
                </div>
            </div>
            </center>

            <center>
            <div className="col">
                <div className="card" style={{width: "15rem", minHeight:"330px", borderRadius: "35px", backgroundColor: "#91DF89", border: "none"}}>
                    <p className="himbauan-2">Melaporkan kepada pihak bewajib jika ada pihak yang mencemari lingkungan perairan</p>
                    <br/><img src={himbauan3Img} style={{width: "30%", height: "7em", marginLeft: "30px"}}/>
                </div>
            </div>
            </center>

            <center>
                <div className="col">
                    <div className="card kartu4" style={{width: "15rem", minHeight: "320px", borderRadius: "35px", backgroundColor: "#FDE3B3", border: "none;"}}>
                        <p className="himbauan-2">Bersama - sama anggota masyarakat lainnya melakukan upaya menjaga sungai dari pencemaran</p>
                        <img src={himbauan4Img} style={{width: "35%", marginLeft: "120px", marginTop: "20px"}}/>
                    </div>
                </div>
            </center>
        </div>
        </div>
        <br/>
        <br/>
        
        </>
    )
}

export default Penanggulangan