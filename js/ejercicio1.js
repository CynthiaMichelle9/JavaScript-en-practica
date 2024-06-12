
function caracteresPermitidos(cadena) {
    let permitidos = /^[A-Za-z]+$/;
    return permitidos.test(cadena);
}

let validarABC = function (texto) {
    if (caracteresPermitidos(texto)) {
        return true;
    } else {
        return false;
    }
};

let submit = function () {

    let nombreValue = document.getElementById("nombre").value
    let nombreValid = validarABC(nombreValue);
    if (nombreValid == false) {

        let errorNombre = document.getElementsByClassName('errorNombre');
        for (i = 0; i < errorNombre.length; i++) {
            errorNombre[i].innerText = "El nombre es requerido"
        }
    }

    let asuntoValue = document.getElementById("asunto").value;
    let asuntoValid = validarABC(asuntoValue);
    if (asuntoValid == false) {

        let errorasunto = document.getElementsByClassName('errorAsunto');
        for (i = 0; i < errorasunto.length; i++) {
            errorasunto[i].innerText = "El asunto es requerido"
        }
    }

    let mensajeValue = document.getElementById("mensaje").value
    let mensajeValid = validarABC(mensajeValue);
    if (mensajeValid == false) {

        let errormensaje = document.getElementsByClassName('errorMensaje');
        for (i = 0; i < errormensaje.length; i++) {
            errormensaje[i].innerText = "El mensaje es requerido"
        }
    }

    if ((nombreValid == true) && (asuntoValid == true) && (mensajeValid == true)) {
        let resultado = document.getElementsByClassName("resultado");
        for (i = 0; i < resultado.length; i++) {
            resultado[i].innerHTML = "Mensaje enviado con éxito!!!";
        }
    }
    return false
}

let buttonForm = document.getElementById("botton");

buttonForm.onclick = submit