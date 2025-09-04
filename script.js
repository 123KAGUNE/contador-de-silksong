document.addEventListener('DOMContentLoaded', function() {
  // Contador regressivo

  // Contador regressivo

  function atualizarContadorRegressivo() {

    const destinoLisboa = new Date(Date.UTC(2025, 8, 4, 14, 0, 0)); // 15:00 Lisboa = 14:00 UTC
    const agora = new Date();
    const diferenca = destinoLisboa - agora;

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
