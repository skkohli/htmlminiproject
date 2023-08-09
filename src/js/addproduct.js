
        function getNextProductId() {
            const lastId = parseInt(localStorage.getItem('last_id')) || 0;
            return lastId + 1;
        }    
        function addProducts(){
            const productForm = document.getElementById('productForm');
            const name = document.getElementById('name').value;
            const price = parseFloat(document.getElementById('price').value);
            const description = document.getElementById('description').value;
            const img = document.getElementById('img').value;
           
            const newProduct = {
                    id: getNextProductId(),
                    name,
                    price,
                    description,
                    img
                };
            // Retrieve existing products from local storage
                const existingProducts = JSON.parse(localStorage.getItem('products')) || [];  
            // Add the new product to the array
                existingProducts.push(newProduct);

            // Store the updated products array in local storage
            localStorage.setItem('products', JSON.stringify(existingProducts));
            localStorage.setItem('last_id',newProduct.id);
            // Clear the form fields
            productForm.reset();

            alert('Product added successfully!');  
        };
