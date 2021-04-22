const getUrl = document.location.search
console.log (getUrl)

const ny = new URLSearchParams(getUrl)
const id = ny.get("id")
console.log (id)
const place = document.querySelector (".details")
const url = `https://camillaatek.no/wp-json/wc/store/products/${id}`
console.log(window.location.href)
 place.innerHTML = '<div class="load loading-icon"></div>';
const productTemplate = (products) => {
    
    let productDiv = `
    <ul>
        <a href="single-product.html?id=${product.id}"><img src="${image.src}"></a>
            <li>${product.name}</li>
            <p>£${product.prices.price}</p>
        
        
    </ul>`;
        place.innerHTML = productDiv;
        document.title = (product.name)
};

fetch(url)
    .then(response => response.json())
    .then(data => productTemplate(data))
    .catch(err => console.error(err.message)
);