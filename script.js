document.addEventListener('DOMContentLoaded', function() {
  // Contador regressivo

  // Contador regressivo
  function atualizarContadorRegressivo() {
    const destino = new Date("2025-09-04T00:00:00");
    const agora = new Date();
    const diferenca = destino - agora;

    if (diferenca <= 0) {
      document.getElementById("contadorRegressivo").textContent = "Chegou o dia!";
      clearInterval(intervaloRegressivo);
      return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("contadorRegressivo").textContent =
      `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  }
  atualizarContadorRegressivo();
  const intervaloRegressivo = setInterval(atualizarContadorRegressivo, 1000);
});
