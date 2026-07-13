texto = document.getElementById('texto');

let num1 = prompt("Por favor, digite um número: ");
let operador = prompt("Escolha e escreva uma operação [soma] ou [subtração]: ");
let num2 = prompt("Agora digite outro número: ")

function calcSoma() {
    return Number(num1) + Number(num2);
}

function calcSubtracao() {
    return Number(num1) - Number(num2);
}

switch (operador) {
    case "Soma":
        calcSoma();
        texto.innerHTML = `Resultado: ${calcSoma()}`
        console.log("A soma foi realizada com sucesso");
        break;

    case "Subtracao":
        calcSubtracao();
        texto.innerHTML = `Resultado: ${calcSubtracao()}`
        console.log("A subtração foi realizada com sucesso");
        break;
}