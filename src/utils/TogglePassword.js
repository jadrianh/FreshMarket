document.querySelectorAll(".toggle-password").forEach(toggle => {
    toggle.addEventListener("click", function() {
        // Encuentra el campo de contraseña asociado
        const passwordInput = this.parentNode.querySelector("input[type='password'], input[type='text']");
        const passwordType = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", passwordType);

        // Cambiar el icono
        const eyeIcon = this.querySelector("i");
        if (passwordType === "text") {
            eyeIcon.classList.remove("fa-eye");
            eyeIcon.classList.add("fa-eye-slash");
        } else {
            eyeIcon.classList.remove("fa-eye-slash");
            eyeIcon.classList.add("fa-eye");
        }
    });
});
