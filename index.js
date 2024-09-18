const numeroCorrecto = 87; 
function leerNumero() {
    let numeroUsuario = parseInt(prompt("Introducir un número entre 1 y 100:"));

    while (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        alert("Número no válido. Tiene que ser un número entre 1 y 100.");
        numeroUsuario = parseInt(prompt("Introduce un número entre 1 y 100:"));
    }
return numeroUsuario;
}
function comprobarValor(numeroUsuario, numeroCorrecto) {
    if (numeroUsuario === numeroCorrecto) {
        return 0; 
    } else if (numeroUsuario > numeroCorrecto) {
        return 1; 
    } else {
        return -1; 
    }
}
function adivinarNumero() {
    let adivinado = false;
        
while (!adivinado) {
        let numeroUsuario = leerNumero();
        let resultado = comprobarValor(numeroUsuario, numeroCorrecto);

        if (resultado === 0) {
            alert("Ganaste crack, encontraste el numero correcto");
            adivinado = true;
        } else if (resultado === 1) {
            alert("Te pasaste. Intenta de nuevo.");
        } else if (resultado === -1) {
            alert("Numero menor al solicitado. Intenta de nuevo.");
        }
    }
}
adivinarNumero();
