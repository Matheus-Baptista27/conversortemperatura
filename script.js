document.getElementById("conversor-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const valor = parseFloat(document.getElementById("valor").value);
    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;
    let resultado;

    if (origem === "celsius" && destino === "fahrenheit") {
        resultado = (valor * 9/5) + 32;
    } else if (origem === "fahrenheit" && destino === "celsius") {
        resultado = (valor - 32) * 5/9;
    } else if (origem === "celsius" && destino === "kelvin") {
        resultado = valor + 273.15;
    } else if (origem === "kelvin" && destino === "celsius") {
        resultado = valor - 273.15;
    } else if (origem === "fahrenheit" && destino === "kelvin") {
        resultado = (valor - 32) * 5/9 + 273.15;
    } else if (origem === "kelvin" && destino === "fahrenheit") {
        resultado = (valor - 273.15) * 9/5 + 32;
    } else if (origem === "celsius" && destino === "rankine") {
        resultado = (valor + 273.15) * 9/5;
    } else if (origem === "fahrenheit" && destino === "rankine") {
        resultado = (valor + 459.67) * 5/9;
    } else if (origem === "kelvin" && destino === "rankine") {
        resultado = valor * 9/5;
    } else if (origem === "rankine" && destino === "celsius") {
        resultado = (valor - 491.67) * 5/9;
    } else if (origem === "rankine" && destino === "fahrenheit") {
        resultado = (valor - 491.67) * 9/5;
    } else if (origem === "rankine" && destino === "kelvin") {
        resultado = valor * 5/9;
    } else {
        resultado = valor;
    }

    document.getElementById("resultado").textContent = `${valor} ${origem} é igual a ${resultado.toFixed(2)} ${destino}`;
});
