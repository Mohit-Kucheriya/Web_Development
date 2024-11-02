document.addEventListener("DOMContentLoaded", () => {
    // Sample products data
    const products = [
        { id: 1, name: "Product 1", price: 99.99 },
        { id: 2, name: "Product 2", price: 9.99 },
        { id: 3, name: "Product 3", price: 15.99 },
    ];

    const cart = []; // an array to store the items in the cart when button is clicked.

    const productListDiv = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartTotalContainer = document.getElementById("cart-total");
    const totalPrice = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");

    // Looping through the products array and creating a product div for each product
    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id ="${product.id}">Add to Cart</button>
        `;
        productListDiv.appendChild(productDiv);
    });

    productListDiv.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const productID = parseInt(e.target.getAttribute("data-id"));
            console.log(productID);

            // find method returns the first element in the array that satisfies the given condition
            const product = products.find((p) => p.id === productID); // Find the product with the given ID and return it
            console.log(product);

            addToCart(product);
        }
    });

    function addToCart(product) {
        cart.push(product);
        console.log(cart);
        renderToCart();
    }

    function renderToCart() {
        cartItems.innerText = "";
        let totalPriceofAll = 0;

        if (cart.length > 0) {
            emptyCartMessage.classList.add("hidden");
            cartTotalContainer.classList.remove("hidden");
            cart.forEach((item, index) => {
                totalPriceofAll += item.price; // calculate the total price
                const itemDiv = document.createElement("div");
                itemDiv.innerHTML = `
                <span>${item.name} - $${item.price.toFixed(2)}</span>
                `;
                cartItems.appendChild(itemDiv);
                totalPrice.textContent = `$${totalPriceofAll.toFixed(2)}`;
            });
        } else {
            emptyCartMessage.classList.remove("hidden");
            totalPrice.textContent = `$0.00`
        }
    }

    checkoutBtn.addEventListener("click", () => {
        cart.length = 0;
        alert("Checkout Successful");
        renderToCart()
    })
});
