const url = "https://camillaatek.no/wp-json/wc/store/products/"
const results = document.querySelector(".results")

const productList =(products)=>{
    results.innerHTML = "";
    for(product of products){
        
        let productDiv = ``
        console.log(product)
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
fetch(url)
    .then(response => response.json())
    .then(data => productList(data))
    .catch(error => results.innerHTML = "ups that went wrong");
