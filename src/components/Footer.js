class Footer extends HTMLElement {
    constructor() {
        super();
        
        this.innerHTML = `
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <link rel="stylesheet" href="./css/Main.css">

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        
        <footer class="footer_area section_padding_130_0">
        <div class="container">
            <div class="row">
            <!-- Single Widget-->
            <div class="col-12 col-sm-6 col-lg-4">
                <div class="single-footer-widget section_padding_0_130">
                    <!-- Footer Logo-->
                    <div class="footer-logo mb-3"><h4 class="widget-title">FreshMarket</h4></div>
                    <p>En <strong>FreshMarket</strong> estamos comprometidos con nuestra misión: Ofrecer precios bajos todos los días a las familias de Centroamérica para que puedan vivir mejor.</p>
                    <!-- Copywrite Text-->
                    <div class="copywrite-text mb-5">
                    </div>
                    <!-- Footer Social Area-->
                    <div class="footer_social_area">
                        <a href="https://www.facebook.com" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://www.pinterest.com" data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest"><i class="fa-brands fa-pinterest"></i></a>
                        <a href="https://www.skype.com" data-toggle="tooltip" data-placement="top" title="" data-original-title="Skype"><i class="fa-brands fa-skype"></i></a>
                        <a href="https://www.twitter.com" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <!-- Single Widget-->
            <div class="col-12 col-sm-6 col-lg">
                <div class="single-footer-widget section_padding_0_130">
                <!-- Widget Title-->
                <h5 class="widget-title">Quienes somos?</h5>
                <!-- Footer Menu-->
                <div class="footer_menu">
                    <ul>
                    <li><a href="../assets/doc/QuiénesSomos.pdf">Acerca de nosotros</a></li>
                    <li><a href="../assets/doc/DERECHOS.pdf">Derechos de los clientes</a></li>
                    <li><a href="../assets/doc/Políticadeprivacidad.pdf">Politicas de privacidad</a></li>
                    <li><a href="../assets/doc/TÉRMINOSYCONDICIONES.pdf">Terminos &amp; Condiciones</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <!-- Single Widget-->
            <div class="col-12 col-sm-6 col-lg">
                <div class="single-footer-widget section_padding_0_130">
                <!-- Widget Title-->
                <h5 class="widget-title">Soporte</h5>
                <!-- Footer Menu-->
                <div class="footer_menu">
                    <ul>
                    <li><a href="../views/Help.html">Ayuda</a></li>
                    <li><a href="../views/Support.html">Soporte</a></li>
                    
                    </ul>
                </div>
                </div>
            </div>
            <!-- Single Widget-->
            <div class="col-12 col-sm-6 col-lg">
                <div class="single-footer-widget section_padding_0_130">
                <!-- Widget Title-->
                <h5 class="widget-title">Contactanos</h5>
                <!-- Footer Menu-->
                <div class="footer_menu">
                    <ul>
                    <li><a href="https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook">Nuestro correo</a></li>
                    <li><a href="tel:+50375262524"">Llamanos</a></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </footer>
        `;
    }
}

customElements.define('my-footer', Footer);
