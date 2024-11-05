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

        // Mensaje cuando el carrito está vacío

        $cartContainer.html(`

            <div class="d-flex justify-content-center align-items-center mb-5 mt-5">

                <div class="cart-empty-container">

                    <img src="../assets/empty-cart.png" alt="Carrito vacío">

                    <h2>Tu carrito está vacío</h2>

                    <p>Parece que aún no has agregado productos a tu carrito.<br>¡Explora nuestras categorías!</p>

                    <a href="../views/Products.html" class="btn btn-primary">Ver Productos</a>

                </div>

            </div>

        `);

        return;

    }

    let totalAmount = 0;



    $.each(cartItems, function (productId, quantity) {

        const product = getProductById(productId);

        if (!product) return;



        const totalPrice = calculateTotalPrice(product.pricePerUnit, quantity);

        totalAmount += parseFloat(totalPrice);



        // Estructura HTML de cada elemento del carrito

        // Selecciona el contenedor donde se mostrarán los productos del carrito

const userId = sessionStorage.getItem('loggedInUserId');

const cartKey = `cart_${userId}`;



function getCart() {

    return JSON.parse(localStorage.getItem(cartKey)) || {};

}



function calculateTotalPrice(price, quantity) {

    return (price * quantity).toFixed(2);

}

function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function updateCartDisplay() {

    const cartItems = getCart();

    const $cartContainer = $('#cart-container');

    $cartContainer.empty(); // Limpia el contenido previo



    if ($.isEmptyObject(cartItems)) {

        // Mensaje cuando el carrito está vacío

        $cartContainer.html(`

            <div class="d-flex justify-content-center align-items-center vh-100">

                <div class="cart-empty-container">

                    <img src="../assets/empty-cart.png" alt="Carrito vacío">

                    <h2>Tu carrito está vacío</h2>

                    <p>Parece que aún no has agregado productos a tu carrito.<br>¡Explora nuestras categorías!</p>

                    <a href="../views/Products.html" class="btn btn-primary">Ver Productos</a>

                </div>

            </div>

        `);

        return;

    }



    let totalAmount = 0;

    let itemsHtml = '';



    $.each(cartItems, function (productId, quantity) {

        const product = getProductById(productId);

        if (!product) return;



        const totalPrice = calculateTotalPrice(product.pricePerUnit, quantity);

        totalAmount += parseFloat(totalPrice);



        // Estructura HTML de cada elemento del carrito

        itemsHtml += `

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

    });



    // Construir HTML para el resumen del carrito

    const summaryHtml = `

        <div id="cart-summary">

            <h5>Resumen del carrito</h5>

            <div class="d-flex justify-content-between">

                <p>Productos</p>

                <p>$${totalAmount.toFixed(2)}</p>

            </div>

            <div class="d-flex justify-content-between">

                <p>Envío</p>

                <p>Gratis</p>

            </div>

            <hr>

            <div class="d-flex justify-content-between">

                <strong>Total (incluido IVA)</strong>

                <strong>$${totalAmount.toFixed(2)}</strong>

            </div>

            <button class="btn btn-primary btn-lg btn-block mt-3" id="checkout-btn">Ir a pagar</button>

        </div>

    `;

    // Fechas de envío
    const today = new Date();
    const deliveryStart = formatDate(today);
    const deliveryEnd = formatDate(new Date(today.setDate(today.getDate() + 3)));

    // Agregar el HTML de los productos y el resumen en un contenedor principal

    $cartContainer.append(`

        <div id="cart-container-wrapper">

            <div id="cart-items">

                ${itemsHtml}

            </div>
            ${summaryHtml}
        </div>

        <div class="card mb-4">
            <div class="card-body">
              <p><strong>Expected shipping delivery</strong></p>
              <p class="mb-0">${deliveryStart} - ${deliveryEnd}</p>
            </div>
        </div>

        <div class="card mb-4 mb-lg-0">
            <div class="card-body">
              <p><strong>We accept</strong></p>
              <img class="me-2" width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                alt="Visa" />
              <img class="me-2" width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                alt="American Express" />
              <img class="me-2" width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                alt="Mastercard" />
              <img class="me-2" width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                alt="PayPal acceptance mark" />
            </div>
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

