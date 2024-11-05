class Navbar extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <link rel="stylesheet" href="./css/Main.css">
        <script src="../utils/Plugins.js">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        <style>
            .nav-link {
                font-family: 'Roboto', sans-serif;
                font-weight: 500;
                font-style: normal;
            }
        </style>
        <header class="p-3 mb-1 border-bottom">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                <img src="../assets/icons/logo.svg" class="bi me-2" width="55" height="55"
                role="img" aria-label="Bootstrap">
                <use xlink:href="#bootstrap">
                </use>
                </svg>
            </a>
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                <a href="./Main.html" class="nav-link px-3 link-dark">
                    Inicio
                </a>
                </li>
                <li>
                <a href="../views/Products.html" class="nav-link px-3 link-dark">
                    Productos
                </a>
                </li>
                <li>
                <div class="dropdown text-end">
                    <a href="#" class="nav-link px-3 link-dark dropdown-toggle" id="dropdownCategory1" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                    </a>
                    <ul class="dropdown-menu text-small" aria-labelledby="dropdownCategory1">
                        <li>
                            <a class="dropdown-item" href="../views/Category.html?category=Frutas y Vegetales">
                                <i class="fas fa-apple-alt" style="color: #212121;"></i>  Frutas y vegetales
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="../views/Category.html?category=Carnes y Embutidos">
                                <i class="fas fa-drumstick-bite" style="color: #212121;"></i>  Carnes y embutidos
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="../views/Category.html?category=Pescados y Mariscos">
                                <i class="fas fa-fish" style="color: #212121;"></i>  Pescados y mariscos
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="../views/Category.html?category=Productos Lacteos">
                                <i class="fas fa-cheese" style="color: #212121;"></i>  Productos lácteos
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="../views/Category.html?category=Hierbas y Especias">
                                <i class="fas fa-leaf" style="color: #212121;"></i>  Hierbas y especias
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="../views/Category.html?category=Licores">
                                <i class="fas fa-wine-glass" style="color: #212121;"></i>  Vinos y licores
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="../views/Category.html?category=Panadería">
                                <i class="fas fa-bread-slice" style="color: #212121;"></i>  Panadería
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="../views/Category.html?category=Enlatados">
                                <i class="fas fa-database" style="color: #212121;"></i>  Enlatados y conservas
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="../views/Category.html?category=Snacks y Dulceria">
                                <i class="fas fa-cookie" style="color: #212121;"></i>  Snacks y dulcería
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="../views/Category.html?category=Bebidas">
                                <i class="fas fa-glass-whiskey" style="color: #212121;"></i>  Agua y refrescos
                            </a>
                        </li>
                    </ul>
                </div>
                </li>
            </ul>

            <form class="col-12 col-lg-auto mb-2 mb-lg-0" onsubmit="return searchProducts(event)">
                <input type="search" id="searchInput" class="form-control" placeholder="Buscar productos..." aria-label="Search">
            </form>
            <a href="../views/BuyCart.html" class="btn btn-outline-success btn-sm  mr-3">
                <i class="fa-solid fa-cart-shopping" style="font-size: 142%;"></i>
            </a>

            <div class="dropdown text-end">
                <a href="#" class="d-inline-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="../assets/icons/Default-Profile-Picture.png" alt="mdo" width="32" height="32"
                class="rounded-circle">
                </a>
                <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                <li>
                    <a class="dropdown-item" href="../views/Settings.html">
                    Configuracion
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="../views/Help.html">
                    Ayuda
                    </a>
                </li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li>
                    <a id="closeSession" class="dropdown-item" href="../views/Login.html">
                    Sign out
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </header>
        `;

        // Manejo del evento de búsqueda
        this.addEventListener('keypress', function(event) {
            if (event.target && event.target.id === 'searchInput' && event.key === 'Enter') {
                event.preventDefault();
                const query = event.target.value.trim();
                if (query) {
                    // Redirigir a search.html con la consulta de búsqueda como parámetro de URL
                    window.location.href = `Search.html?q=${encodeURIComponent(query)}`;
                }
            }
        });
    }
}

customElements.define('my-navbar', Navbar);
