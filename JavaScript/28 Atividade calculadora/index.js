texto = document.getElementById('texto');

let num1 = prompt("Por favor, digite um número: ");
let operador = prompt("Escolha e escreva uma operação [soma] ou [subtração]: ");
let num2 = prompt("Agora digite outro número: ")

function calcSoma() {
    return Number(num1) + Number(num2);
    /* O return é usado para devolver o valor calculado. E o number é usado para converter uma string em um número */
}

function calcSubtracao() {
    return Number(num1) - Number(num2);
}

let resultado;

switch (operador) {
    case "Soma":
        resultado = calcSoma();
        texto.innerHTML = `Resultado: ${resultado}`
        console.log("A soma foi realizada com sucesso");
        break;

    case "Subtracao":
        resultado = calcSubtracao();
        texto.innerHTML = `Resultado: ${resultado}`
        console.log("A subtração foi realizada com sucesso");
        break;
}