let a = 10;
let b = 20;
let c = null;

document.getElementById('antes-inversao').innerHTML = `
    A: ${a}<br />
    B: ${b}<br />
    C: ${c}<br />
`
/* O .innerHTML pega todo o conteúdo do elemento selecionado, incluindo as tags. Diferente do .textContent que ignora as tags e escreve literal as tags. */

// Lógica de inversão de valores das variáveis
c = b;
console.log('O valor de B foi atribuído ao C');

b = a;
console.log('O valor de A foi atribuído ao B');

a = c;
console.log('O valor de C foi atribuído ao A');

c = null;
console.log('O valor null voltou ao C');

console.log('Os valores foram invertidos com sucesso');


document.getElementById('depois-inversao').innerHTML = `
    A: ${a}<br />
    B: ${b}<br />
    C: ${c}<br />
`