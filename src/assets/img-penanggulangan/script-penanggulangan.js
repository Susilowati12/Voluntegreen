const url = 'https://63539aa2ccce2f8c02f98d91.mockapi.io';

let containerPertama = document.getElementById("container1");
let containerKedua = document.getElementById("container2");
let containerKetiga = document.getElementById("container3");
let containerKeempat = document.getElementById("container4");

async function getMockApi(url) {

    const respond = await fetch(url)
    const result = respond.json();

    return result;
}

getMockApi(`${url}/penanggulangan`)

.then(function(result){

    containerPertama.innerHTML = '';

    result.slice(0,1).forEach(function(penanggulangan){
        containerPertama.innerHTML += 
        `
        <div class="row">
            <div class="col-xl-6" id="gambar">
                <img src="${penanggulangan.img}" class="img-fluid" style="border-radius: 20px; margin-top: 2rem;">
            </div>
            <div class="col-md" id="ket-gambar">
                ${penanggulangan.title}
            </div>
        </div>
        `
    });
    
})

// .then(function(result){

//     containerPertama.innerHTML = '';

//     result.slice(0,1).forEach(function(penanggulangan){
//         containerPertama.innerHTML += 
//         `
//         <div class="row">
//             <div class="col-xl-6" id="gambar">
//                 <img src="${penanggulangan.img}" class="img-fluid" style="border-radius: 20px; margin-top: 2rem;">
//             </div>
//             <div class="col-md" id="ket-gambar">
//                 ${penanggulangan.title}
//             </div>
//         </div>
//         `
//     });
    
// })

// .then(function(result){

//     containerKedua.innerHTML = '';

//     result.slice(1,2).forEach(function(penanggulangan){
//         containerKedua.innerHTML += 
//         `
//         <div class="row">
//             <div class="col-lg" id="gambar">
//                 <h1>
//                     ${penanggulangan.title}
//                 </h1>
//                 <br>
//                 <p>
//                     ${penanggulangan.content}
//                 </p>
//             </div>
//             <div class="col-lg-6">
//                 <img src="${penanggulangan.img}" class="img-fluid" id="gambar2">
//             </div>
//         </div>
//         `

//     });
    
// })


async function getMockApi2(url) {

    const respond = await fetch(url)
    const result = respond.json();

    return result;
}

getMockApi2(`${url}/penanggulangan2`)

.then(function(result){

    containerKedua.innerHTML = '';

    result.forEach(function(penanggulangan2){
        containerKedua.innerHTML += 
        `
        <div class="row">
            <div class="col-lg" id="gambar">
                <h1>
                    ${penanggulangan2.title}
                </h1>
                <br>
                <p>
                    ${penanggulangan2.content}
                </p>
            </div>
            <div class="col-lg-6">
                <img src="${penanggulangan2.img}" class="img-fluid" id="gambar2">
            </div>
        </div>
        `
    });
})

async function getMockApi3(url) {

    const respond = await fetch(url)
    const result = respond.json();

    return result;
}

getMockApi3(`${url}/penanggulangan3`)

.then(function(result){
    containerKetiga.innerHTML = '';

    result.forEach(function(penanggulangan3){
        containerKetiga.innerHTML +=
        `
        <div class="col" style="text-align:center;">
            <div id="ket-gambar" style="margin-top: -2rem;">${penanggulangan3.title}</div>
            <p>
                ${penanggulangan3.content}
            </p>
        </div>
        `
    })
})

async function getMockApi4(url) {

    const respond = await fetch(url)
    const result = respond.json();

    return result;
}

getMockApi4(`${url}/penanggulangan4`)

.then(function(result){
    containerKeempat.innerHTML = ' ';

    result.forEach(function(penanggulangan4){
        containerKeempat.innerHTML +=
        `
        <div class="row">
                <div class="col-lg-5" id="gambar-pengendalian"  >
                    <img src="${penanggulangan4.img}" class="img-fluid" style="width: 100em; margin-left: 2rem; margin-top: 6rem; margin-right: 0rem; border-radius: 50px">
                </div>
                
                <div class="col-lg" id="peran-hutan" style="color: white; margin-left: 2rem; margin-right: 4rem;  " >
                    <br>
                    <a id="judul2" >${penanggulangan4.title}</a><br>
                    <a id="judul2" >${penanggulangan4.title2}</a><br>
                    <p style="margin-left: 0; text-align: justify; margin-top: 1rem;">
                        ${penanggulangan4.content}
                    </p>
                </div>

            </div>

            <div class="row">

                <div class="col">
                    <p id="menjaga-hutan1">1</p> 
                    <p id="menjaga-hutan-isi"> 
                        Memberdayakan masyarakat sekitar hutan, baik berupa peningkatan pengetahuan tentang hutan
                    </p>

                </div>

                <div class="col">
                    <p id="menjaga-hutan1">2</p> 
                    <p id="menjaga-hutan-isi"> 
                        Melatih tenaga penyuluh lapangan kebakaran hutan dan lahan dan membuat peta rawan kebakaran hutan
                    </p>
                </div>
            </div>


            <div class="row">

                <div class="col">
                    <p id="menjaga-hutan1">3</p> 
                    <p id="menjaga-hutan-isi"> 
                        Meningkatkan partisipasi masyarakat dalam mengawasi dan menjaga kelestarian hutan
                    </p>

                </div>

                <div class="col">
                    <p id="menjaga-hutan1">4</p> 
                    <p id="menjaga-hutan-isi"> 
                        Meningkatkan koordinasi atau hubungan antar lembaga yang berkepentingan dengan hutan
                    </p>
                </div>

        </div>
        `
    })
})