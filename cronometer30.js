let tiempo = 30;
let intervalo;

function iniciarCrono() {
  clearInterval(intervalo); 
  intervalo = setInterval(() => {
    if (tiempo > 0) {
      tiempo--;
      document.getElementById("cuenta").innerText = tiempo;
    } else {
      clearInterval(intervalo);
      alert("¡Tiempo cumplido! 💪");
    }
  }, 1000);
}

function reiniciarCrono() {
  clearInterval(intervalo);
  tiempo = 30;
  document.getElementById("cuenta").innerText = tiempo;
}
