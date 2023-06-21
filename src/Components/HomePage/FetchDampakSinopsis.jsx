import React from 'react'
import { useEffect, useState} from "react"
import axios from 'axios';
import { Link } from 'react-router-dom';


function FetchDampakSinopsis() {
  const api_url = 'https://635391d2ccce2f8c02f907b5.mockapi.io/penanggulangan';
  const [dampak, setDampak] = useState([])

  // console.log("List Penanggulangan Sinopsis")

  useEffect(() => {
    // console.log("List Sinopsis Berhasil ditampilkan")
    axios(api_url).then (result => {
      console.log(result.data)
      setDampak(result.data)
    })
  }, [])

  console.log(dampak)

  return (
    <>
    <div className="container penanggulangan">
    <h3 className="text-center penanggulangantitle">Dampak</h3>
    <div className="row">

      {dampak.slice(3,6).map((item, index) => ( 
  <div  key={index} className="col-md-4">
    <div className="profile-card-4 text-center"><img src={item.img} width={300} className="img img-responsive"/>


        <div className="profile-content">
          <div className="profile-name">{item.title}</div>                      
            <div className="profile-description">{item.konten}</div>
            <Link to={"/dampak"}>
            <div className="col-3 text-center profile-overview readmorepencegahan"><a style={{color: "white"}}>Read More</a></div>
            </Link>
        </div>
        
    </div>
  </div>




        // <div key={index}>
        //   <img src={item.img} width={200}/>
        //   <h3>{item.title}</h3>
        // </div>
      ))}
  </div>
  </div>
    </>
  )
}

export default FetchDampakSinopsis
