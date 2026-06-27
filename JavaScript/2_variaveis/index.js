// String
var texto = 'Olá, mundo!';

// Number
var numero = 75;
var valorFloat = 3.14;

// Boolean
var booleano = true;

/* Ao recarregar o site, cada um dos alertas será exibido um atrás do outro */
/* alert(valorFloat);
alert(numero);
alert(texto);
 */

var container = document.getElementById('texto-teste'); /* Aqui eu declarei uma variável chamada "container" que armazena o elemento HTML com o ID "texto-teste" */
container.textContent = texto; /* A função do textContainer é para definir o conteúdo de texto de um elemento HTML. Em resumo, declarei que a variável "container" armazena o elemento HTML com o ID "texto-teste" e atribuí o valor da variável "texto" ao seu conteúdo de texto. */

console.log("Deu tudo certo, patrão!");