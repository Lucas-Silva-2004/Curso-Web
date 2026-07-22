/* const listaFrutas = Array(); */

const listaFrutas = []; // Apenas os colchetes também indica um array

listaFrutas[1] = 'banana';
listaFrutas[2] = true;
listaFrutas['x'] = 'morango'; // além de números, caracteres e strings também podem ser índices
listaFrutas[4] = 100;

// Retorna o valor do índice especificado
console.log(listaFrutas);

const listaFrutas2 = Array('Banana', 'Maçã', 'Morango', 'Uva'); // Os objetos também podem ser passados como parâmetros

console.log(listaFrutas2[0]);

const listaFrutas3 = ['Banana', 'Maçã', 'Morango', 'Uva']; // Os objetos também podem ser passados diretamente entre colchetes sem que aja necessidade de declarar array

console.log(listaFrutas3);