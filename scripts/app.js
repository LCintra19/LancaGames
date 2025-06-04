document.addEventListener("DOMContentLoaded", function () {
  var myCarousel = document.querySelector("#carouselJogos");
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000, // Troca de slide a cada 3 segundos
    wrap: true // Continua rodando em loop infinito
  });
});
