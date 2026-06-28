var a = 10;
var b = 20;
var c = null;

document.write('A: ' + a + '<br />')
document.write('B: ' + b + '<br />')
document.write('C: ' + c + '<br />')

document.write('<hr />')

// Lógica de inversão de valores das variáveis
var c = b;
console.log('O valor de B foi atribuído ao C');

var b = a;
console.log('O valor de A foi atribuído ao B');

var a = c;
console.log('O valor de C foi atribuído ao A');

var c = null;
console.log('O valor null voltou ao C');

console.log('Os valores foram invertidos com sucesso');

// Exibição dos valores alterados

document.write('A: ' + a + '<br />');
document.write('B: ' + b + '<br />');
document.write('C: ' + c + '<br />');