
const formLogin = document.querySelector('form');
const correoInput = document.getElementById('correo');
const passwordInput = document.getElementById('password');


const msgCorreo = document.createElement('div');
msgCorreo.id = 'msgCorreo';
msgCorreo.style.fontSize = '14px';
msgCorreo.style.marginTop = '4px';
msgCorreo.style.color = 'red';
correoInput.after(msgCorreo);

const msgPassword = document.createElement('div');
msgPassword.id = 'msgPassword';
msgPassword.style.fontSize = '14px';
msgPassword.style.marginTop = '4px';
msgPassword.style.color = 'red';
passwordInput.after(msgPassword);


formLogin.addEventListener('submit', function(e) {
  e.preventDefault();

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const correo = correoInput.value.trim();
  const password = passwordInput.value.trim();

  const usuario = usuarios.find(u => u.correo === correo);


  if (!usuario) {
    msgCorreo.textContent = "Correo no registrado";
    return;
  } else {
    msgCorreo.textContent = "";
  }

 
  if (usuario.password !== password) {
    msgPassword.textContent = "Contraseña incorrecta";
    return;
  } else {
    msgPassword.textContent = "";
  }

  
  let mensaje = "Inicio de sesión exitoso!";
  if (usuario.descuento && usuario.descuento > 0) {
    mensaje += ` Tienes un descuento de por vida del ${usuario.descuento}%.`;
  }

  alert(mensaje);


  window.location.href = "index.html";
});
