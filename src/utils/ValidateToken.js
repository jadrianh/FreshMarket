// Función para obtener usuarios desde localStorage
function fetchUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : []; // Si no hay datos, devuelve un array vacío
}

// Función para manejar el inicio de sesión
function loginUser(email, password) {
    const users = fetchUsers();
    const user = users.find(user => user.email === email && user.password === password); // Busca el usuario con el email y la contraseña

    if (user) {
        // Almacena el ID del usuario en el localStorage o en sessionStorage
        sessionStorage.setItem('loggedInUserId', user.id); // Almacena el ID del usuario

        // Redirige a Main.html
        window.location.href = './Main.html';
    } else {
        document.getElementById('login-status').textContent = "Correo o contraseña incorrectos.";
    }
}

// Manejador del formulario de inicio de sesión
document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Obtener valores del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Llama a la función para iniciar sesión
    loginUser(email, password);
});
