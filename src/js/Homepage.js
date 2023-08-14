function displayProducts() {
    var getProducts = JSON.parse(localStorage.getItem('productList'));
    console.log(getProducts);
    var myDiv = document.getElementById('div-multiple');
    var htmlProduct = "";
    for(var i=6; i<getProducts.length;i++ ){
        console.log(getProducts[i]);
        htmlProduct =htmlProduct+        
         `<figure>
                <img src= '${getProducts[i].image}'>
                <figcaption>${getProducts[i].name}<br/><span> &#8377;${getProducts[i].price}</span></figcaption>
              </figure>`;      
             myDiv.innerHTML= htmlProduct;        
    }
}
function displayImagesOne(){
    var getProducts = JSON.parse(localStorage.getItem('productList'));
    var myDivTwo=document.getElementById('images-one');
    var htmlProductOne="";
    for(var i=0;i<=2;i++){
        var htmlProductOne=htmlProductOne+
        `<div> 
        <img src= '${getProducts[i].image}'>
        </div>`;
        myDivTwo.innerHTML=htmlProductOne;
    }
}
function displayImagesTwo(){
    var getProducts = JSON.parse(localStorage.getItem('productList'));
    var myDivThree=document.getElementById('images-two');
    var htmlProduct="";
    for(i=3;i<5;i++){
        htmlProduct =htmlProduct+ 
        `<figure>
                <img src= '${getProducts[i].image}'>
                <figcaption>${getProducts[i].name}<br/><span> &#8377;${getProducts[i].price}</span></figcaption>
        </figure>`
              myDivThree.innerHTML= htmlProduct;       
    }
}
function displayImageSaree(){
        var getProducts = JSON.parse(localStorage.getItem('productList'));
        var myDivSaree=document.getElementById('div-saree');
        var htmlProduct="";
    if(i=5){
        htmlProduct =htmlProduct+ 
        `<figure>
                <img src= '${getProducts[i].image}'>
                <figcaption>${getProducts[i].name}<br/><span> &#8377;${getProducts[i].price}</span></figcaption>
              </figure>`
              myDivSaree.innerHTML= htmlProduct;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const arrayOfObjects=[
    {"id":"1",
     "name":"banner-one",
     "image":"https://i.ibb.co/ft9cb6D/shopping1.jpg"
    },
    {"id":"2",
     "name":"banner-two",
     "image":"https://i.ibb.co/jVxCxv2/shopping2.png"
    },
    {"id":"3",
     "name":"banner-two",
     "image":"https://img.freepik.com/free-vector/gradient-supermarket-facebook-post_23-2149387929.jpg?w=1060&t=st=1691922754~exp=1691923354~hmac=92250a5aaa16ee9c759954ff34113201073436243dd657edf050071c700efb29"
    },
    {"id":"4",
     "name":"Mens jacket",
     "price":"1500",
     "image":"https://i.ibb.co/w6yfmJT/mens-jacket.jpg"
    },
    {"id":"5",
     "name":"Bedsheet",
     "price":"950",
     "image":"https://i.ibb.co/bdQgMdZ/bedsheet.png"
    },
    {"id":"6",
     "name":"Saree",
     "price":"1299",
     "image":"https://glamourental.com/cdn/shop/products/2_2_23aad2a5-171c-4a44-8c91-eb317b016625.jpg?v=1662797535&width=1800"
    },
    {"id":"7",
     "name":"Mens Hoodie",
     "price":"995",
     "image":"https://plus.unsplash.com/premium_photo-1689327920663-406abecf9805?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {"id":"8",
     "name":"Smart Watch",
     "price":"15,999",
     "image":"https://images.unsplash.com/photo-1597923709001-5a061c88418d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {"id":"9",
     "name":"Earbuds",
     "price":"1999",
     "image":"https://i.ibb.co/12TLx50/earbuds.png"
    },
    {"id":"10",
     "name":"Flowerpot",
     "price":"580",
     "image":"https://i.ibb.co/cNjLZxN/flower-pot.jpg"
    }
];
localStorage.setItem('productList',JSON.stringify(arrayOfObjects));
            displayProducts();
            displayImagesOne();
            displayImagesTwo();
            displayImageSaree();
});