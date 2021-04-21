const results = document.querySelector(".results")

const flower = "https://camillaatek.no/wp-json/wc/store/products/"

fetch(flower, {

})


    .then(response => response.json())
    .then(data => productTemplate(data))
    .catch(error => results.innerHTML = "ups that went wrong");


const productTemplate =(products)=>{
    results.innerHTML = "";
    for(product of products){
        console.log(product)
        let productDiv = ``
        // for(image of product.images){
        //     productDiv += `
        //     <ul class="card">
        //     <a href="single-product.html?id=${product.id}"><img scr="${image.src}"></a>
        //     <li>${product.name}</li>
        //     <p>${product.prices.price}</p>
        //     <button>View</button>
        //     </ul>
        //     `
        // }
        for (image of product.images){
            productDiv += `
            <ul class="card">
            <a href="single-product.html?id=${product.id}"><img src="${image.src}"></a>
            <li>${product.name}</li>
            <p>£${product.prices.price}</p>
            <button>View</button>
            </ul>
            `
        
        }
        results.innerHTML += productDiv
    }
}















/*const url = "http://camillaatek.no/wp-json/wc/store/products/"
const container = document.querySelector('div')



 const productsList = (products) => {
    console.log(product)
    container.innerHTML = "";
    for (product of products) {
        
        let nyFilm = `
        <a href="./details.html?id=${i.id}"</ul>
    <ul>
    <h2>${i.title}</h2>
    
    
    </ul>`;
        container.innerHTML += nyFilm;
    };
};

 fetch(url)
    .then(response => response.json())
    .then(data => productsList(data))
    .catch(err => console.error(err.message));*/