texto = document.getElementById('texto');

let num1 = prompt("Por favor, digite um número: ");
let operador = prompt("Escolha um operador [soma] ou [subtração]");
let num2 = prompt("Digite o segundo número");

function calcular(num1, num2, operador) {
    num1 = Number(num1);
    num2 = Number(num2);
    let resultado;

    switch (operador.toLowerCase()) {
        case "soma":
            resultado = num1 + num2;
            break;
        case "subtracao":
            resultado = num1 - num2;
            break;
        default:
            resultado = "Operação inválida!";
    }
    return resultado;
    /* O return resultado é usado para devolver o valor calculado. Pois sem ele, a função realizaria o cálculo, mas não devolveria nenhum value */
}

let resultadoFinal = calcular(num1, num2, operador);
/* A variável resultadoFinal armazena o valor retornado pela função "calcular" */

texto.innerHTML = `O resultado é: ${resultadoFinal}`




// Primeira tentativa de calculadora. Funcionou, mas não é a melhor forma de fazer. Os "functionCalc" sugam as variáveis globais. Além de não ser boa prática, se elas mudarem de nome, a função quebra. O ideal é passar as variáveis como parâmetro, como no exemplo da função "calcularAreaTerreno" da pasta "18 Criar funções".


/* let num1 = prompt("Por favor, digite um número: ");
let operador = prompt("Escolha e escreva uma operação [soma] ou [subtração]: ");
let num2 = prompt("Agora digite outro número: ")

function calcSoma() {
    return Number(num1) + Number(num2);
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
} */