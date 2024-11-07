//Carrosel
$(document).ready(function() {
    $('#carouselExampleIndicators').on('slide.bs.carousel', function (e) {
 
        console.log("Mudando para o slide " + e.to);
    });
});

