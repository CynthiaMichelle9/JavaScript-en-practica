let coloresBtn = document.querySelectorAll("button[id^='btn-']");

let color = function () {
    coloresBtn.forEach(function (boton) {
        boton.addEventListener("click", function () {
            var color = boton.style.backgroundColor;

            var caja = document.getElementById("caja");
            caja.style.backgroundColor = color;
        });
    });
};

color(); 