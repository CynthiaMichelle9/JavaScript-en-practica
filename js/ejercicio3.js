document.addEventListener("DOMContentLoaded", function () {
    let respuesta = document.querySelector('.resultado');
    let valor1Input = document.getElementById('valor1');
    let valor2Input = document.getElementById('valor2');
    let sumarBtn = document.getElementById('btn-sumar');
    let restarBtn = document.getElementById('btn-restar');


    sumarBtn.addEventListener('click', function () {
        let valor1 = parseFloat(valor1Input.value);
        let valor2 = parseFloat(valor2Input.value);
        let resultado = valor1 + valor2;
        respuesta.textContent = resultado;
    });

    restarBtn.addEventListener('click', function () {
        let valor1 = parseFloat(valor1Input.value);
        let valor2 = parseFloat(valor2Input.value);
        let resultado = valor1 - valor2;

        if (resultado < 0) {
            resultado = 0;
        }
        respuesta.textContent = resultado;
    });
});