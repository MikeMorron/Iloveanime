document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Datos de usuario de prueba
    const validUsername = 'admin';
    const validPassword = '12345';

    // Filtro simple para evitar SQL injection
    const filterSQLInjection = (input) => {
        const regex = /[^\w\s]/gi;
        return input.value.replace(regex, '');
    };

    // Aplicar filtro a los campos de usuario y contraseña
    usernameInput.addEventListener('input', () => {
        filterSQLInjection(usernameInput);
    });

    passwordInput.addEventListener('input', () => {
        filterSQLInjection(passwordInput);
    });

    // Evento para manejar el formulario de login
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obtener los valores ingresados
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Validar usuario y contraseña
        if (username === validUsername && password === validPassword) {
            // Login exitoso
            alert('Inicio de sesión exitoso');
            window.location.href = 'pagina-principal.html'; // Redirigir a otra página
        } else {
            // Error en login
            errorMessage.textContent = 'Usuario o contraseña incorrectos';
            usernameInput.classList.add('vibrar');
            passwordInput.classList.add('vibrar');
        }
    });
});


function togglePasswordLogin(btn) {
    const pass = document.getElementById('password');
    const isHidden = pass.type === "password";
    pass.type = isHidden ? "text" : "password";
    btn.textContent = isHidden ? "🙈" : "👁️";
}

    //footer fade out
    setTimeout(function () {
    document.querySelector('footer').classList.add('ocultar');
}, 3000); // Tiempo en milisegundos (10 segundos)