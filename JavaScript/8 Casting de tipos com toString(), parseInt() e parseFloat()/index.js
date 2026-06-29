var variavel_1 = prompt('Digite um número: ');
variavel_1 = parseInt(variavel_1);
/* O parseInt é responsável por converter a variável para um inteiro. Com isso, os números podem ser somados */

var variavel_2 = prompt('Digite outro número: ');
variavel_2 = parseFloat(variavel_2);
/* O parseFloat converte a variável para float. */

document.write(variavel_1 + variavel_2);

console.log(variavel_1);
console.log(variavel_2);

variavel_1 = 10;
variavel_2 = 20;

document.write(variavel_1.toString() + variavel_2.toString());
/* O .toString é responsável por converter a variável para String */