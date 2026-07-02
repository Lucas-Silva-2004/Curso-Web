let num1 = parseInt(prompt("Digite um número: "));
let num2 = parseInt(prompt("Digite outro número: "));
let operador = prompt("Agora digite o operador desejado [+], [-], [*], [%], [/]");

let resultado = document.getElementById("resultado");

/* 1. Validação: isNaN checa se a conversão para número falhou. */
if (isNaN(num1) || isNaN(num2) || !operador) {
    alert("Por favor, digite um caractere ou número válido.");
}

switch (operador) {
    case '+' :
        let soma = (num1 + num2);
        resultado.innerHTML = `A soma entre ${num1} e ${num2} é ${soma}`;
        console.log("soma bem sucedida.");
        break;
}