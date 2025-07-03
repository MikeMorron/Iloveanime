document.addEventListener('DOMContentLoaded', () => {
    const formRegistro = document.getElementById('form-registro');
    
    formRegistro.addEventListener('submit', async (e) => {
        e.preventDefault(); // Evita el envío del formulario
        
        const usuario = document.getElementById('usuario');
        const correo = document.getElementById('correo');
        const contrasena = document.getElementById('contrasena');
        const contrasena2 = document.getElementById('contrasena2');
        
        let errores = false;
        
        // Función para aplicar vibración en caso de error
        const vibrarCampo = (campo) => {
            campo.classList.remove('vibrar'); // Asegurar que se reinicie la animación
            void campo.offsetWidth; // Forzar reflow para reiniciar la animación
            campo.classList.add('vibrar');
        
            setTimeout(() => {
                campo.classList.remove('vibrar'); // Quita la vibración
                void campo.offsetWidth; // Reiniciar el flujo de renderizado
                campo.classList.add('vibrar'); // Aplica la vibración nuevamente
            }, 400); // Espera 400ms antes de la segunda vibración
        };
        
        // Validaciones
        if (usuario.value.trim() === '') {
            vibrarCampo(usuario);
            errores = true;
        }
        if (correo.value.trim() === '') {
            vibrarCampo(correo);
            errores = true;
        }
        if (contrasena.value.trim() === '') {
            vibrarCampo(contrasena);
            errores = true;
        }
        if (contrasena2.value.trim() === '') {
            vibrarCampo(contrasena2);
            errores = true;
        }
        if (contrasena.value !== contrasena2.value) {
            vibrarCampo(contrasena);
            vibrarCampo(contrasena2);
            alert('Las contraseñas no coinciden.');
            errores = true;
        }
        
        // Validación de correo electrónico (solo Gmail y Hotmail)
        const correoRegex = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail)\.com$/;
        if (!correoRegex.test(correo.value.trim())) {
            vibrarCampo(correo);
            const correoError = document.getElementById('correo-error');
            correoError.textContent = 'Email no válido. Use Gmail o Hotmail.';
            errores = true;
        }
        
        if (errores) {
            return; // Si hay errores, se detiene el proceso
        }
        
        // Si todo está correcto, se envía a la base de datos (descomentarlo cuando se tenga un backend)
        const datosUsuario = {
            usuario: usuario.value,
            correo: correo.value,
            contrasena: contrasena.value, // En un entorno real, la contraseña debe encriptarse antes de enviarla
        };
        
        console.log('Datos a enviar:', datosUsuario);
        
        //envio de datos a la db
        try {
            const respuesta = await fetch('URL_DEL_BACKEND', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datosUsuario),
            });
            
            if (respuesta.ok) {
                alert('¡Cuenta creada con éxito!');
                formRegistro.reset();
            } else {
                alert('Error al registrar. Inténtalo de nuevo.');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            alert('Hubo un problema con la conexión.');
        }
        
        alert('¡Cuenta creada con éxito!'); // Mensaje de éxito simulado
        formRegistro.reset();
    });
    
    // Funcionalidad de recuperación de contraseña
    const recuperarContrasena = document.getElementById('recuperar-contrasena');
    recuperarContrasena.addEventListener('click', () => {
        const correoRecuperacion = prompt('Introduce tu correo para recuperar la contraseña:');
        if (correoRecuperacion) {
            alert('Se ha enviado un enlace de recuperación a ' + correoRecuperacion);
        }
    });
});

// Función para alternar la visibilidad de las contraseñas
document.getElementById('form-registro').addEventListener('submit', function(e) {
    const correo = document.getElementById('correo').value;
    const permitido = /@gmail\.com$|@hotmail\.com$/i;
    if (!permitido.test(correo)) {
        e.preventDefault();
        document.getElementById('correo-error').textContent = "Solo se permiten correos @gmail.com o @hotmail.com";
    } else {
        document.getElementById('correo-error').textContent = "";
    }
});


function toggleBothPasswords(btn) {
    const pass1 = document.getElementById('contrasena');
    const pass2 = document.getElementById('contrasena2');
    const isHidden = pass1.type === "password";
    pass1.type = pass2.type = isHidden ? "text" : "password";
    btn.textContent = isHidden ? "🙈" : "👁️";}