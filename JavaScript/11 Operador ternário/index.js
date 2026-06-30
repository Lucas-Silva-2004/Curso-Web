let aluno = prompt("Digite o nome do aluno: ");
const media = 7;
let nota = prompt("Digite a nota do aluno: ");
nota = parseFloat(nota);

let faltas = prompt("Digite o número de faltas");
faltas = parseInt(faltas);

const maxima_faltas = 15;

const texto = document.getElementById("texto");

let resultado = (nota >= media && faltas <= maxima_faltas) ? 'Aprovado' : 'Reprovado';
/* O ternário é representado pelo ? e a divisão dos resultados são pelo : */
/* O operador ternário é mais simples do que a estrutura de decisão. Ele apresenta apenas os valores "true" e "false". */

texto.innerHTML = resultado;