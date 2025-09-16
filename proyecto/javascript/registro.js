const formRegistro = document.getElementById('formRegistro');
const passwordInput = document.getElementById('password');
const confirmarInput = document.getElementById('confirmar');
const fechaNacimientoInput = document.getElementById('fecha_nacimiento');
const correoInput = document.getElementById('correo');

const msgPassword = document.getElementById('msgPassword');
const msgConfirmar = document.getElementById('msgConfirmar');
const msgDescuento = document.getElementById('msgDescuento');


correoInput.addEventListener('input', () => {
  const correo = correoInput.value.trim().toLowerCase();
  if (correo.endsWith('@duocuc.cl')) {
    msgDescuento.textContent = "¡Tienes un 20% de descuento de por vida!";
    msgDescuento.className = 'duoc';
  } else {
    msgDescuento.textContent = "";
    msgDescuento.className = '';
  }
});


passwordInput.addEventListener('input', () => {
  const password = passwordInput.value.trim();
  if (password.length < 8) {
    msgPassword.textContent = "La longitud mínima de este campo debe ser igual o superior a 8 símbolos.";
    msgPassword.className = 'weak';
  } else if (password.match(/[A-Z]/) && password.match(/[0-9]/)) {
    msgPassword.textContent = "Fuerza de la contraseña: Fuerte";
    msgPassword.className = 'strong';
  } else {
    msgPassword.textContent = "Fuerza de la contraseña: Media";
    msgPassword.className = 'medium';
  }
});


confirmarInput.addEventListener('input', () => {
  if (confirmarInput.value.trim() !== passwordInput.value.trim()) {
    msgConfirmar.textContent = "Las contraseñas no coinciden";
    msgConfirmar.className = 'nomatch';
  } else {
    msgConfirmar.textContent = "Contraseñas coinciden";
    msgConfirmar.className = 'match';
  }
});


formRegistro.addEventListener('submit', function(e) {
  e.preventDefault();

  const fechaNacimiento = new Date(fechaNacimientoInput.value);
  const hoy = new Date();
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  const mes = hoy.getMonth() - fechaNacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) edad--;
  if (edad < 18) {
    alert("Debes ser mayor de 18 años para registrarte.");
    return;
  }

  if (passwordInput.value.trim() !== confirmarInput.value.trim()) {
    alert("Las contraseñas no coinciden.");
    return;
  }


  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const descuento = correoInput.value.trim().endsWith('@duocuc.cl') ? 20 : 0;
  usuarios.push({
    nombre: document.getElementById('nombre').value.trim(),
    correo: correoInput.value.trim(),
    password: passwordInput.value.trim(),
    fechaNacimiento: fechaNacimientoInput.value,
    sexo: document.getElementById('sexo').value,
    descuento,
    avatar: "icons/avatar.png"
  });

  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  alert(`Registro exitoso! ${descuento > 0 ? 'Tienes un 20% de descuento de por vida.' : ''}`);
  
  formRegistro.reset();
  msgPassword.textContent = '';
  msgConfirmar.textContent = '';
});
