// script.js

$(document).ready(function() {
    $('#carouselExampleIndicators').on('slide.bs.carousel', function (e) {
        // Ações a serem realizadas quando o slide muda
        console.log("Mudando para o slide " + e.to);
    });
});
