let num1 = 10;
let num2 = 8;

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
divisao = parseInt(divisao);

let resto = num1 % num2;
resto = parseFloat(resto.toFixed(2));


let textoSoma = document.getElementById("textoSoma");
textoSoma.innerHTML = (`<p>A soma entre ${num1} e ${num2} é: ${soma}</p><br>`);

let textoSubtracao = document.getElementById("textoSubtracao");
textoSubtracao.innerHTML = (`<p>A subtracao entre ${num1} e ${num2} é: ${subtracao}</p><br>`);

let textoMultiplicacao = document.getElementById("textoMultiplicacao");
textoMultiplicacao.innerHTML = (`<p>A multiplicacao entre ${num1} e ${num2} é: ${multiplicacao}</p><br>`);

let textoDivisao = document.getElementById("textoDivisao");
textoDivisao.innerHTML = (`<p>A divisao entre ${num1} e ${num2} é: ${divisao}</p><br>`);

let textoResto = document.getElementById("textoResto");
textoResto.innerHTML = (`<p>O resto da divisao entre ${num1} e ${num2} é: ${resto}</p>`);