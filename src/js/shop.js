let products = [
    {
        image:"./img/tshirt.jpeg",
        productName:"Shirt",
        rating: 3,
        cost:"$300"
    },
    {
        image:"./img/jeans.jpeg",
        productName:"trousers",
        rating: 4,
        cost:"$300"
    },
    {
        image:"./img/jeans.jpeg",
        productName:"jeans",
        rating: 5,
        cost:"$300"
    },
    {
        image:"./img/tshirt.jpeg",
        productName:"Coat",
        rating: 2,
        cost:"$300"
    },
    {
        image:"./img/shoes.jpeg",
        productName:"Shoes",
        rating: 4,
        cost:"$300"
    },
    {
        image:"./img/tshirt.jpeg",
        productName:"Jacket",
        rating: 3,
        cost:"$300"
    }
];
localStorage.setItem('products',JSON.stringify(products));
function displayProducts() {
    let products = JSON.parse(localStorage.getItem("products"));
    let productsDiv = document.getElementById('products');
    for(let i=0; i<products.length;i++) {
        let prod = document.createElement('div');
        prod.classList.add('product')

        let productImg = document.createElement('figure')
        let img = document.createElement('img');
        img.src = products[i].image;
        productImg.classList.add('productImg');
        productImg.appendChild(img)

        let producInfo = document.createElement('div');
        producInfo.classList.add('productInfo')
        let productName = document.createElement('p');
        productName.innerText = products[i].productName;
        let rating = document.createElement('div');
        for(let j = 0; j < products[i].rating; j++) {
            let ratingSpan = document.createElement('span');
            ratingSpan.className = 'fa fa-star checked';
            rating.appendChild(ratingSpan);
        } 
        let productCost = document.createElement('p');
        productCost.innerText = products[i].cost;

        producInfo.appendChild(productName);
        producInfo.appendChild(rating);
        producInfo.appendChild(productCost);
        // producInfo.appendChild(productName);

        prod.appendChild(productImg);
        prod.appendChild(producInfo);

        productsDiv.appendChild(prod)


    }

}

displayProducts()
