
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

function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // In a real-world scenario, you should validate the username and password against a secure backend/database.
            // For this example, we'll use a simple hardcoded username and password.
            const validUsername = 'admin';
            const validPassword = 'password';

            if (username === validUsername && password === validPassword) {
                localStorage.setItem('adminLoggedIn', 'true');
                window.location.href = 'addproduct.html'; // Redirect to the admin page
            } else {
                alert('Invalid username or password. Please try again.');
            }
        }
