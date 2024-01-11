// Asigna el evento a los botones si existen
let btnSi = document.getElementById('btnSi');
let btnNo = document.getElementById('btnNo');

if (btnSi && btnNo) {
  btnSi.addEventListener('mousemove', cambiarFondo);
  btnNo.addEventListener('mousemove', cambiarFondo);
  btnSi.addEventListener('mouseout', restaurarFondo);
  btnNo.addEventListener('mouseout', restaurarFondo);
  btnNo.addEventListener('click', mostrarAlertaNo);
} else {
  console.error('Los botones no fueron encontrados.');
}


function cambiarFondo(event) {
  // Captura del contenedor
  let contenedor = document.getElementById('miContenedor');

  // Verifica si el evento tiene una propiedad 'target'
  if (event && event.target) {
    // Obtiene el id del elemento que disparó el evento
    let elementoId = event.target.id;

    // Aplica el cambio de fondo según el botón
    if (elementoId === 'btnSi') {
      contenedor.classList.remove('cambioFondoNo'); // Si cambias de 'No' a 'Sí', elimina la clase de 'No'
      contenedor.classList.add('cambioFondoSi');
    } else if (elementoId === 'btnNo') {
      contenedor.classList.remove('cambioFondoSi'); // Si cambias de 'Sí' a 'No', elimina la clase de 'Sí'
      contenedor.classList.add('cambioFondoNo');
    } else {
      console.log('Paso algo xd');
    }
  }
}


function restaurarFondo(event) {

  //captura del contenedor
  let contenedor = document.getElementById('miContenedor');
  //Función
  if (event && event.target) {
    let elementoId = event.target.id;
    if (elementoId === 'btnSi') {
      contenedor.classList.replace('cambioFondoSi', 'contenedor');
    } else if (elementoId === 'btnNo') {
      contenedor.classList.replace('cambioFondoNo', 'contenedor');
    } else {
      console.log('Paso algo xd');
    }
  }
}

function mostrarAlertaNo() {
  if (confirm("¿Estás segur@ de continuar con esta grave decisión?")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
}


