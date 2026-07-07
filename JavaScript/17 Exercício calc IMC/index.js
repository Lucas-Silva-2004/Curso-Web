let nome = prompt("Por favor, digite o seu nome: ");
let altura = prompt("Informe sua altura em centímetros: ");
altura = (altura / 100);

let peso = prompt("Agora digite o seu peso: ");
peso = parseFloat(peso);

let M = (peso / (altura ** 2))
/* Cálculo do IMC */

let classificacao;

resultado = document.getElementById("resultado");

if (M > 16) {
    classificacao = "Baixo peso, muito grave";
} else if (M >= 16 && M <= 16.99) {
    classificacao = "Baixo peso, grave";
} else if (M >= 17 && M <= 18.49) {
    classificacao = "Baixo peso";
} else if (M >= 18.50 && M <= 24.99) {
    classificacao = "Peso normal";
} else if (M >= 25 && M <= 29.99) {
    classificacao = "Sobrepeso";
} else if (M >= 30 && M <= 34.99) {
    classificacao = "Obesidade grau 1";
} else if (M >= 35 && M <= 39.99) {
    classificacao = "Obesidade grau 2";
} else if (M >= 40) {
    classificacao = "Obesidade grau 3";
}

resultado.innerHTML = `${nome} possui índice de massa corporal igual a ${M.toFixed(2)}, sendo classificado como: ${classificacao}`;
/* O .toFixed(2) limita o número de casas decimais a 2 a ser exibido */