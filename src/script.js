
/* ================================================================
   ADAPTACIÓN DE LA HORA EN DIRECTO - PORTFOLIO FABIO CUFFARO
   ================================================================ */

function updateClock() {

  // Función para así convertir las horas, minutos y segundos actualizandolos con el horario local desde
  // la vista del ordenador

    const now = new Date(); //Obtener hora actual
    let hours = now.getHours().toString().padStart(2, '0'); // Guardamos variable horas
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Guardamos variable minutos
    const seconds = now.getSeconds().toString().padStart(2, '0'); // Guardamos variable segundos
  
    //¿Como am y pm? Uso un ternario, si más de las 12 PM, sino AM
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    //Formateo la salida de texto
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    //Cojo el id clock y le cambio el texto que contiene por la constante.
    document.getElementById('clock').textContent = timeString;
  }
  
  //Voy referescando cada 1000 milisegundos : ) VA fuera de la función porque sino cada vez se resetearia
  setInterval(updateClock, 1000);

  //Llamamos a la función y la iniciamos
  updateClock();







//Función para cambiar el año

  const yearSpan = document.getElementById('year');
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;




/* ================================================================
   FUNCIÓN TEMA OSCURO - PORTFOLIO FABIO CUFFARO
   ================================================================ */
const themeToggle = document.getElementById('theme-toggle');

// Revisar si el usuario ya tiene un tema guardado
if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Cambiar icono del botón
    if(document.body.classList.contains('dark-mode')){
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark'); // Guardar preferencia
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light'); // Guardar preferencia
    }
});






/* ================================================================
   FUNCIÓN BOTON SUBE ARRIBA - PORTFOLIO FABIO CUFFARO
   ================================================================ */



// Variable para el botón
const topButton = document.getElementById("topBtn");

// Cuando el usuario hace scroll, ejecutamos la función
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Si bajamos más de 300px, el botón aparece
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = "flex";
    } else {
        topButton.style.display = "none";
    }
}

// Función para volver arriba con scroll suave
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Esto hace que el salto no sea brusco
    });
}

/* ================================================================
   MENÚ HAMBURGUESA MÓVIL - PORTFOLIO FABIO CUFFARO
   ================================================================ */

const hamburger = document.getElementById('hamburger');

// Creamos el menú móvil dinámicamente copiando los links del navbar
const mobileMenu = document.createElement('div');
mobileMenu.classList.add('navbar__mobile-menu');

// Copiamos los links del menú principal
const navLinks = document.querySelectorAll('.navbar__menu a');
navLinks.forEach(link => {
    const clone = link.cloneNode(true);
    mobileMenu.appendChild(clone);
});

// Insertamos el menú justo después del navbar
const navbar = document.querySelector('.navbar');
navbar.parentNode.insertBefore(mobileMenu, navbar.nextSibling);

// Toggle al hacer click en el hamburguesa
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');

    // Cambiamos el icono entre ☰ y ✕
    const icon = hamburger.querySelector('i');
    if (mobileMenu.classList.contains('open')) {
        icon.className = 'ri-close-line';
    } else {
        icon.className = 'ri-menu-line';
    }
});

// Cerramos el menú al hacer click en un link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.querySelector('i').className = 'ri-menu-line';
    });
});
