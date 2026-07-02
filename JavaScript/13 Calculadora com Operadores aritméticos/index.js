let num1 = parseInt(prompt("Digite um número: "));
let num2 = parseInt(prompt("Digite outro número: "));
let operador = prompt("Agora digite o operador desejado [+], [-], [*], [%], [/]");

let resultado = document.getElementById("resultado");

switch (operador) {
    case '+' :
        let soma = (num1 + num2);
        resultado.innerHTML = `A soma entre ${num1} e ${num2} é ${soma}`;
        console.log("soma bem sucedida.");
        break;
}