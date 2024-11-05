function renderProducts(products) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "col";

        productCard.innerHTML = `
            <div class="product-item">
                ${product.discount > 0 ? `<span class="badge bg-success position-absolute m-3">-${product.discount * 100}%</span>` : ''}
                <figure>
                    <img src="${product.image}" class="tab-image">
                </figure>
                <h3>${product.name}</h3>
                <span class="qty">C/u </span>
                <span class="rating"><i class="fa-solid fa-star" style="color: #ffc800;"></i> ${product.rating}</span>
                
                <div class="price">
                    ${product.discount > 0 ? `<strike class="original-price" style="font-size:0.89em; color: #808080;">$${product.pricePerUnit.toFixed(2)}</strike>` : ''}
                    <span class="discounted-price">$${getDiscountedPrice(product)}</span>
                </div>
                <div class="d-flex align-items-center justify-content-between mt-2">
                    <div class="product-qty">
                        <select name="quantity" id="quantity-select-${product.id}" class="form-select quantity-select" style="width:80px;">
                            ${Array.from({ length: product.quantity }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
                        </select>
                    </div>
                    <a href="#" class="nav-link add-to-cart" data-id="${product.id}">Add to Cart <iconify-icon icon="uil:shopping-cart"></iconify-icon></a>
                </div>
            </div>
        `;

        productContainer.appendChild(productCard);
    });

    // Añadir eventos de clic a cada enlace "Add to Cart" después de renderizar los productos
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Evitar que el enlace redirija

            const productID = button.getAttribute("data-id");
            const productCard = button.closest(".product-item");
            const quantitySelect = productCard.querySelector(".quantity-select");
            const quantity = parseInt(quantitySelect.value);

            if (quantity > 0) {
                addToCart(productID, quantity);
            } else {
                alert("Por favor, selecciona una cantidad válida.");
            }
        });
    });
}

function getCurrentUserID() {
    return sessionStorage.getItem("loggedInUserId");
}

// Función para agregar un producto al carrito
function addToCart(productID, quantity) {
    const currentUserID = getCurrentUserID();

    if (!currentUserID) {
        alert("Debes iniciar sesión para agregar productos al carrito.");
        return;
    }

    const cartKey = `cart_${currentUserID}`;
    let cart = JSON.parse(localStorage.getItem(cartKey)) || {};

    if (cart[productID]) {
        cart[productID] += quantity;
    } else {
        cart[productID] = quantity;
    }

    localStorage.setItem(cartKey, JSON.stringify(cart));
    alert("Producto agregado al carrito.");
}

function getDiscountedPrice(product) {
    return product.discount > 0 
        ? (product.pricePerUnit * (1 - product.discount)).toFixed(2) 
        : product.pricePerUnit.toFixed(2);
}

// Llamada a la función con los productos importados
renderProducts(products);
