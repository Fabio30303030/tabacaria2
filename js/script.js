//Carrosel
$(document).ready(function() {
    $('#carouselExampleIndicators').on('slide.bs.carousel', function (e) {
 
        console.log("Mudando para o slide " + e.to);
    });
});

//pop up

window.onload = function() {
    const alerta = document.getElementById("lei-alerta");
    const okButton = document.getElementById("okbutton");

    alerta.style.display = "block";


    okButton.onclick = function() {
        alerta.style.display = "none";
    };
};
