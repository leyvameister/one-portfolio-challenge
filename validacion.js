//Haz tú validación en javascript acá

document.getElementById('contactForm').addEventListener('submit', (event) => {
    // Evitar que el formulario se evie
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    let name = document.getElementById('form_name').value;
    let email = document.getElementById('form_email').value;
    let subject = document.getElementById('form_subject').value;
    let message = document.getElementById('form_message').value;

    // Boolean para validar
    let isValid = true;

    // Resetear mensajes de error
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('subjectError').style.display = 'none';
    document.getElementById('messageError').style.display = 'none';

    // Validar nombre
    if (name.trim() === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Validar email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Validar asunto
    if (subject.trim() === '') {
        document.getElementById('subjectError').style.display = 'block';
        isValid = false;
    }

    // Validar mensaje
    if (message.trim() === '') {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    // Si todos los campos son validos, enviar el formulario
    if (isValid) {
        alert('Formulario enviado correctamente.');
        document.getElementById('contactForm').submit();
    }
});

// Mapeo de ids de campos a ids de errores
const errorMap = {
    'form_name': 'nameError',
    'form_email': 'emailError',
    'form_subject': 'subjectError',
    'form_message': 'messageError'
};

// Funcion para ocultar mensajes de error al ingresar texto
function hideError(event) {
    let field = event.target;
    let errorId = errorMap[field.id];
    document.getElementById(errorId).style.display = 'none';
}

// Agregar el evento de input a cada input del formulario
document.getElementById('form_name').addEventListener('input', hideError);
document.getElementById('form_email').addEventListener('input', hideError);
document.getElementById('form_subject').addEventListener('input', hideError);
document.getElementById('form_message').addEventListener('input', hideError);