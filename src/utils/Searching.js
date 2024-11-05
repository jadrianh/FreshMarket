function searchProducts(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
    const searchTerm = document.getElementById("searchInput").value;

    // Redirigir a la nueva página con el término de búsqueda
    window.location.href = `search.html?query=${encodeURIComponent(searchTerm)}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const searchTerm = params.get("query");

    if (searchTerm) {
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        renderProducts(filteredProducts);
    }
});

function renderProducts(products) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = ""; // Limpiar el contenedor de productos

    if (products.length === 0) {
        productContainer.innerHTML = "<p>No se encontraron productos que coincidan con tu búsqueda.</p>";
        return;
    }

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "col mb-4";

        productCard.innerHTML = `
            <div class="product-item">
                ${product.discount > 0 ? `<span class="badge bg-success position-absolute m-3">-${product.discount * 100}%</span>` : ''}
                <figure>
                    <img src="${product.image}" class="tab-image" alt="${product.name}">
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
                    <a href="#" class="nav-link add-to-cart" data-id="${product.id}">Añadir al carrito</a>
                </div>
            </div>
        `;

        productContainer.appendChild(productCard);
    });

    // Añadir eventos a los botones "Añadir al carrito"
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
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
