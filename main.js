import './css/estilos-urbano.css'

document.addEventListener("DOMContentLoaded", function() {
  const carteles = document.querySelectorAll('.cartel');
  mostrarCarteles(carteles, 0);
});

function irAContacto() {
  const areaContacto = document.getElementById('area-contacto');
  areaContacto.scrollIntoView({ behavior: 'smooth' });
}


function mostrarCarteles(carteles, index) {
  if (index < carteles.length) {
    setTimeout(() => {
      carteles[index].style.opacity = "1";
      mostrarCarteles(carteles, index + 2);
    }, 80000);
  }
}


