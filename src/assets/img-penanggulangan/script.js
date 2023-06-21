

const api_url = 'https://635391d2ccce2f8c02f907b5.mockapi.io/penanggulangan';
const api_url1 = 'https://6352c8eaa9f3f34c3748e117.mockapi.io/informasi';


getData(api_url);
getData1(api_url1);

function getData(url){
    fetch(url).then(response => response.json()).then(data => {
        console.log(data); 
        console.log("aloooww")
        // console.log(data.results)


        // showData(data.results);

        
    data.forEach(penanggulangan => {
        const {img, konten, title} = penanggulangan;
        const DataKu = document.createElement('div');
        DataKu.classList.add('colpencegahan');
        DataKu.innerHTML = `
        <img src="${img}" class="img-thumbnail" width="200px">
        <h3>${title}</h3>
        <p>${konten}</p>
        `
        console.log(DataKu);
        const main = document.querySelector('.colpencegahan1');
        console.log(main);
        main.appendChild(DataKu);
    })

    })
}



function getData1(url){
    fetch(url).then(response => response.json()).then(data => {
        console.log(data); 
        console.log("aloooww")
        // console.log(data.results)


        // showData(data.results);

        
    data.slice(0,3).forEach(dampak => {
        const {img, content, title} = dampak;
        const DataKu = document.createElement('div');
        DataKu.classList.add('coldampak');
        DataKu.innerHTML = `
        <img src="${img}" class="img-thumbnail" width="200px">
        <h3>${title}</h3>
        <p>${content}</p>
        `
        console.log(DataKu);
        const main = document.querySelector('.coldampak1');
        console.log(main);
        main.appendChild(DataKu);
    })

    })
}