function suerte() {
    let numero = Number(document.getElementById("numero").value);

    if (numero == 1) {
        document.getElementById("resultado").textContent = "Resultado del número 1";
    }
    else if (numero == 2) {
        document.getElementById("resultado").textContent = "Resultado del número 2";
    }
    else if (numero == 3) {
        document.getElementById("resultado").textContent = "Resultado del número 3";
    }

    else {
        document.getElementById("resultado").textContent = "Número inválido 😭";
    }
}
