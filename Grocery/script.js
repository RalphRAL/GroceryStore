// Define products with categories
const products = [
    { id: 1, category: 'Frozen Products', name: 'Tender Juicy Hotdog', price: 30 },
    { id: 2, category: 'Frozen Products', name: 'Star Meat', price: 40 },
    { id: 3, category: 'Frozen Products', name: 'Holiday Hotdogs', price: 38 },
    { id: 4, category: 'Frozen Products', name: 'CDO burger', price: 50 },
    { id: 5, category: 'Drinks', name: 'Coke', price: 15 },
    { id: 6, category: 'Drinks', name: 'Sprite', price: 15 },
    { id: 7, category: 'Drinks', name: 'Pepsi', price: 15 },
    { id: 8, category: 'Drinks', name: 'Bear Brand', price: 20 },
    { id: 9, category: 'Drinks', name: 'Cowhead Milk', price: 25 },
    { id: 10, category: 'Canned Goods', name: '555 Afritada', price: 30 },
    { id: 11, category: 'Canned Goods', name: 'Century Tuna', price: 28 },
    { id: 12, category: 'Canned Goods', name: 'San Marino', price: 25 },
    { id: 13, category: 'Others', name: 'Tissue', price: 10 },
    { id: 14, category: 'Others', name: 'Alcohol', price: 20 },
    { id: 15, category: 'Others', name: 'Perfume', price: 30 },
    { id: 16, category: 'Others', name: 'Deodorant', price: 25 },
    { id: 17, category: 'Others', name: 'Lotion', price: 40 },
    // Add more products as needed
  ];
  
  // Define the cartItems array to store selected products
  const cartItems = [];
  const cartItemsElement = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  
  // Function to add a product to the shopping cart
  function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    cartItems.push(selectedProduct);
    updateCart();
  }
  
  // Function to update the shopping cart display
  function updateCart() {
    cartItemsElement.innerHTML = '';
    let total = 0;
  
    cartItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItemsElement.appendChild(listItem);
      total += item.price;
    });
  
    totalElement.textContent = total.toFixed(2);
  }
  
  // Display products grouped by categories
  function displayProductsByCategory() {
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = '';
  
    // Get unique categories
    const uniqueCategories = [...new Set(products.map(product => product.category))];
  
    uniqueCategories.forEach(category => {
      // Create a container for each category
      const categoryContainer = document.createElement('div');
      categoryContainer.className = 'category-container';
  
      // Create a heading for the category
      const categoryHeading = document.createElement('h2');
      categoryHeading.textContent = category;
      categoryContainer.appendChild(categoryHeading);
  
      // Filter products for the current category
      const productsInCategory = products.filter(product => product.category === category);
  
      // Display products for the current category
      productsInCategory.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
          <p>${product.name} - ₱${product.price}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        categoryContainer.appendChild(productCard);
      });
  
      // Append the category container to the products section
      productsSection.appendChild(categoryContainer);
    });
  }
  
  // Call the displayProductsByCategory function to initialize product display
  displayProductsByCategory();


// Function to navigate to the checkout page
function goToCheckout() {
    window.location.href = 'checkout.html';
  }
  
  // ... (your existing code)

// Function to submit the order form
function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Sample data for products
    const products = [
      { id: 1, name: 'Star Meat', price: 40 },
      { id: 2, name: 'Tissue', price: 10 },
      { id: 3, name: 'Tender Juicy Hotdog', price: 30 },
      // Add more products as needed
    ];
  
    // Retrieve form values
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;
    const delivery = document.getElementById('delivery').value;
  
    // Calculate total price
    const total = calculateTotal(products);
  
    // Store the form data and total in localStorage
    const orderDetails = { name, contact, address, payment, delivery, products, total };
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
  
    // Redirect to the thank you page
    window.location.href = 'thankyou.html';
  }
  
  function calculateTotal(products) {
    return products.reduce((total, product) => total + product.price, 0);
  }
  
  // Add this function to navigate back to the home page
  function goToHome() {
    window.location.href = 'index.html';
  }