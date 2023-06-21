import React, {useState, useEffect} from "react";
import axios from "axios";

function DataFetching2(){
    const [penanggulangan3, setPenanggulangan3] = useState([])

    useEffect(()=>{
        axios.get('https://63539aa2ccce2f8c02f98d91.mockapi.io/penanggulangan3')
        .then(res => {
            console.log(res.data)
            setPenanggulangan3(res.data)
        })
    },[]);
    
    return(
        <>

            {penanggulangan3.map((item, index) => (
                <div className="col" style={{textAlign:"center"}} key={index}>
                    <div id="ket-gambar" className="judul2" style={{marginTop: "2rem"}}><h1>{item.title}</h1></div>
                    <p>
                        {item.content}
                    </p>
                </div>
            ))}
        </>
    )
}

export default DataFetching2