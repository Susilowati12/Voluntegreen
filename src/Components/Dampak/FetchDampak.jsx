import React from 'react'
import { useEffect, useState} from "react"
import axios from 'axios';
import Navbar from '../Navbar';
import './Dampak.css'


function FetchDampak() {
    const api_url_dampaksinopsis = 'https://635391d2ccce2f8c02f907b5.mockapi.io/dampak-sinopsis';
    const [dampaksinopsis, setDampakSinopsis] = useState([])
    //   console.log("List Penanggulangan Sinopsis")

  
    useEffect(() => {
        // console.log("List Sinopsis Berhasil ditampilkan")
        axios(api_url_dampaksinopsis).then (result => {
            console.log(result.data)
            setDampakSinopsis(result.data)
        })
    }, [])

    //   console.log(dampaksinopsis)

    const api_url_dampaklengkap = 'https://635391d2ccce2f8c02f907b5.mockapi.io/dampak-lengkap';
    const [dampaklengkap, setDampakLengkap] = useState([])

    useEffect (() => {
        axios(api_url_dampaklengkap).then (result => {
            console.log(result.data)
            setDampakLengkap(result.data)
        })
    }, [])
    
    console.log(dampaklengkap)


    return (
        <>
        <Navbar/>
        <section className="home-page">
            <div className="container dampakfirst">
                <svg className="cutebg1" viewBox="30 0 250 250" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FDE3B3"
                        d="M34,-63.2C38.5,-56.2,33,-36,35.4,-23.3C37.8,-10.6,48.1,-5.3,54.7,3.8C61.4,12.9,64.3,25.9,60.4,36C56.5,46.1,45.8,53.4,34.6,60.6C23.3,67.8,11.7,74.9,0.6,73.8C-10.4,72.7,-20.8,63.3,-33.6,57C-46.4,50.7,-61.6,47.5,-66.1,38.5C-70.7,29.6,-64.6,14.8,-64.8,-0.1C-65,-15,-71.5,-30,-69.3,-43.1C-67.1,-56.1,-56.1,-67.1,-43.1,-69.3C-30.1,-71.5,-15,-64.8,-0.2,-64.5C14.7,-64.2,29.4,-70.3,34,-63.2Z"
                        transform="translate(100 100)" />
                </svg>

                <div className="row" >
                    
                    <div className=" col  ">
                        
                        <div className="row">
                        <div className='col-6 dampakfirst2'>
                                <h1>Dampak Dari Perubahan Iklim atau Pencemaran Lingkungan</h1>
                            </div>
                            <div className="col-auto svg-container">
                                <img className='img-head' src="./img/head-3.png" width={400} />
                                
                            </div>
                        
    
                    </div>
                </div>
            </div>
        </div>
        </section>


        <div className='container '>
            <div className='pertanyaanDampak'>
                <h2 className='col'>Apa saja sih dampak dari perbuatan iklim</h2>
                <p>Perubahan iklim berdampak sangat luas pada kehidupan masyarakat. Kenaikan suhu bumi tidak hanya berdampak pada naiknya temperatur bumi tetapi juga mengubah sistem iklim yang mempengaruhi berbagai aspek pada perubahan alam dan kehidupan manusia, seperti kualitas dan hutan, udara, perairan, dan kesehatan.</p>
            </div>
            <div  className='row dampaksinopsisflex' id="txt-item">

        {dampaksinopsis.slice(4,8).map((item, index) => (
                <div key={index} className='col-md-3 text-center category-item sinopsiscabang'>
                        <img src={item.img} width={100}/>
                        <h5>{item.title}</h5>
                        <p>{item.konten}</p>
                </div>
        ))}

        
        {dampaklengkap.slice(0,1).map((item, index) => (
            <>
            <section class="detail-category">
            <div class="container">
            <div class="detailjudul">
                <h1>Yuk Kenali Lebih Lanjut Mengenai Dampak Dari Pencemaran Lingkungan</h1>
            </div>
           <div class="row" id="detail">

                <div key={index} className="col-sm-6 ">
                    <div className="detail-item">
                        <h3>{item.title}</h3>
                        <p>{item.konten}</p>
                    </div>
                </div>

                <div className="col-sm-6 ">
                    <div className="detail-item">
                        <img src={item.img} width={500} />
                    </div>
                </div>
            </div>
            </div>
            </section>
            </>
        ))}
        {dampaklengkap.slice(1,2).map((item, index) => (
        
            <section class=" detail-category-pangan">
                <div class="container">
                <div class="ms-0 me-0 row" id="detail-pangan">

                <div className="col-sm-6 ">
                        <div className="detail-item-pangan">
                            <img src={item.img} width={500}/>
                        </div>
                    </div>

                    <div key={index} className="col-sm-6 ">
                        <div className="detail-item-pangan">
                            <h3>{item.title}</h3>
                            <p>{item.konten}</p>
                        </div>
                    </div>

                  
                </div>
                </div>
            </section>
        ))}

        {dampaklengkap.slice(2,3).map((item, index) => (
        
            <section class=" detail-category-perairan">
                <div class="container">
                <div class="ms-0 me-0 row" id="detail-perairan">

                    <div key={index} className="col-sm-6 ">
                        <div className="detail-item-perairan">
                            <h3>{item.title}</h3>
                            <p>{item.konten}</p>
                        </div>
                    </div>

                    
                <div className="col-sm-6 ">
                        <div className="detail-item-perairan">
                            <img src={item.img} width={500}/>
                        </div>
                </div>

                  
                </div>
                </div>
            </section>
        ))}
        {dampaklengkap.slice(3,4).map((item, index) => (
        
            <section class=" detail-category-kesehatan">
                <div class="container">
                <div class="ms-0 me-0 row" id="detail-kesehatan">

                            
                <div className="col-sm-6 ">
                        <div className="detail-item-kesehatan">
                            <img src={item.img} width={500}/>
                        </div>
                </div>

                    <div key={index} className="col-sm-6 ">
                        <div className="detail-item-kesehatan">
                            <h3>{item.title}</h3>
                            <p>{item.konten}</p>
                        </div>
                    </div>

            

                  
                </div>
                </div>
            </section>
        ))}

        </div>
        </div>
        </>

    )
}

export default FetchDampak