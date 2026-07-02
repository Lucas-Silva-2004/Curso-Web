let num1 = parseInt(prompt("Digite um número: "));
let operador = prompt("Agora digite a operação desejada [++], [--]");

let resultado = document.getElementById("resultado");

switch (operador) {
    case '++':
        resultado.innerHTML = `O incremental de ${num1} é: ${(++num1)}`;
        break;

    case '--':
        resultado.innerHTML = `O decremental de ${num1} é: ${(--num1)}`;
        break;
}
