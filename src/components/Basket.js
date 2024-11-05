// Selecciona el contenedor donde se mostrarán los productos del carrito
const userId = sessionStorage.getItem('loggedInUserId');
const cartKey = `cart_${userId}`;

function getCart() {
    return JSON.parse(localStorage.getItem(cartKey)) || {};
}

function calculateTotalPrice(price, quantity) {
    return (price * quantity).toFixed(2);
}

function updateCartDisplay() {
    const cartItems = getCart();
    const $cartContainer = $('#cart-container');
    $cartContainer.empty(); // Limpia el contenido previo

    if ($.isEmptyObject(cartItems)) {
        $cartContainer.html('<p>El carrito está vacío. <a href="products.html">Ver productos</a></p>');
        return;
    }

    let totalAmount = 0;

    $.each(cartItems, function (productId, quantity) {
        const product = getProductById(productId);
        if (!product) return;

        const totalPrice = calculateTotalPrice(product.pricePerUnit, quantity);
        totalAmount += parseFloat(totalPrice);

        // Estructura HTML de cada elemento del carrito
        const cartItemHtml = `
            <div class="row mb-4 cart-item">
                <div class="col-md-3">
                    <div class="bg-image rounded" style="width: 60%">
                        <img src="${product.image}" alt="${product.name}" class="w-100">
                    </div>
                </div>
                <div class="col-md-5">
                    <p><strong>${product.name}</strong></p>
                    <p>Precio unitario: $${getDiscountedPrice(product)}</p>
                    <p>Total: $${totalPrice}</p>
                    <button class="btn btn-primary btn-sm remove-btn" data-id="${product.id}" title="Eliminar">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <div class="col-md-4 d-flex align-items-center">
                    <div class="input-group">
                        <button class="btn btn-danger btn-sm quantity-minus" data-id="${product.id}">
                            <i class="fas fa-minus"></i>
                        </button>
                        <input type="number" min="1" class="form-control text-center quantity-input" value="${quantity}">
                        <button class="btn btn-success btn-sm quantity-plus" data-id="${product.id}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
            <hr class="my-4" />
        `;
        $cartContainer.append(cartItemHtml);
    });

    // Muestra el total del carrito
    $cartContainer.append(`
        <div class="text-end mt-3">
            <h5>Total del carrito: $${totalAmount.toFixed(2)}</h5>
            <button class="btn btn-primary btn-lg btn-block" id="checkout-btn">Ir a pagar</button>
        </div>
    `);
}

function removeFromCart(productId) {
    const cartItems = getCart();
    delete cartItems[productId];
    localStorage.setItem(cartKey, JSON.stringify(cartItems));
    updateCartDisplay();
}

// Eventos usando jQuery
$(document).ready(function () {
    updateCartDisplay();

    // Remover un producto
    $('#cart-container').on('click', '.remove-btn', function () {
        const productId = $(this).data('id');
        removeFromCart(productId);
    });

    // Incrementar cantidad
    $('#cart-container').on('click', '.quantity-plus', function () {
        const productId = $(this).data('id');
        const cartItems = getCart();
        cartItems[productId]++;
        localStorage.setItem(cartKey, JSON.stringify(cartItems));
        updateCartDisplay();
    });

    // Decrementar cantidad
    $('#cart-container').on('click', '.quantity-minus', function () {
        const productId = $(this).data('id');
        const cartItems = getCart();
        if (cartItems[productId] > 1) {
            cartItems[productId]--;
            localStorage.setItem(cartKey, JSON.stringify(cartItems));
            updateCartDisplay();
        }
    });
});
