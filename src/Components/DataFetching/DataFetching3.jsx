import React, {useState, useEffect} from "react";
import axios from "axios";

function DataFetching3(){
    const [penanggulangan4, setPenanggulangan4] = useState([])

    useEffect(()=>{
        axios.get('https://63539aa2ccce2f8c02f98d91.mockapi.io/penanggulangan4')
        .then(res => {
            console.log(res.data)
            setPenanggulangan4(res.data)
        })
    },[]);
    
    return(
        <>

            {penanggulangan4.map((item, index) => (
            <div className="container-xxl" style={{backgroundColor: "#018071"}} id="container4">
                <div className="row" key={index}>

                    <div className="col-lg-5" id="gambar-pengendalian">
                        <img src={item.img} className="img-fluid" style={{width: "120em", marginLeft: "2rem", marginTop: "6rem", marginRight: "0rem", borderRadius: "20px"}}/>
                    </div>
                    
                    <div className="col textPeran" id="peran-hutan" style={{color: "white", marginLeft: "2rem", marginRight: "4rem"}}>
                    <br/>
                        <a id="judul2" >{item.title}</a><br/>
                        <a id="judul2" >{item.title2}</a><br/>
                        <p style={{marginLeft: "0", textAlign: "justify", marginTop: "1rem"}}>
                            {item.content}
                        </p>
                    </div>
                </div>
            </div>
            ))}
        </>
    )
}

export default DataFetching3