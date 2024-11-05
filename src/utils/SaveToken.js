// Función para obtener usuarios desde localStorage
function fetchUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : []; // Si no hay datos, devuelve un array vacío
}

// Función para generar un ID único
function generateUniqueId() {
    // Genera un ID único usando la API de Crypto
    return crypto.randomUUID();
}

// Función para guardar un usuario en localStorage
function saveUser(newUser) {
    const users = fetchUsers();

    // Verifica si el correo ya está registrado
    const userExists = users.some(user => user.email === newUser.email);
    if (userExists) {
        alert("Este correo ya está registrado. Intenta con otro.");
        return;
    }

    // Agrega un ID único al usuario
    newUser.id = generateUniqueId();
    users.push(newUser);

    // Guarda el array de usuarios actualizado en localStorage
    localStorage.setItem('users', JSON.stringify(users));
    alert("Usuario registrado exitosamente.");
}

// Manejador del formulario de registro
document.getElementById('register-form').addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtener valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Verificar que las contraseñas coinciden
    if (password !== confirmPassword) {
        document.getElementById('register-status').textContent = "Las contraseñas no coinciden.";
        return;
    }

    // Crear objeto del nuevo usuario
    const newUser = { name, email, password };

    // Guardar usuario en localStorage
    saveUser(newUser);
});
