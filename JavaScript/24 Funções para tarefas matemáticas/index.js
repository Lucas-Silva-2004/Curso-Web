resultado = document.getElementById("resultado");

// Math.ceil(): arredonda um número float para cima.
let a = 10.380;
console.log(Math.ceil(a));

// Math.floor(): arredonda um número float para baixo.
let b = 10.380;
console.log(Math.floor(b));

// Math.round(): arredonda um número float para o inteiro mais próximo. Ou seja, se o número for maior ou igual a 0.5, ele arredonda para cima. Caso contrário, ele arredonda para baixo.
let c = 10.380;
let d = 10.570;
console.log(Math.round(c));
console.log(Math.round(d));

// Math.random(): gera valores floats aleatórios entre 0 e 1.
let e = Math.random();
console.log(Math.random(e));

// Math.trunc(): remove a parte decimal de um número float, retornando apenas a perte inteira. A diferença crucial entre Math.trunc() e Math.floor() é que o primeiro não arredonda o número, apenas remove a parte decimal. Já o segundo arredonda o número para baixo.
let f = 10.380;
console.log(Math.trunc(f));
/* Duas coisas importentes:
    1. Diferente do toFixed(), que exibe um número fixo de casas decimais, o Math.trunc() elimina a parte decimal sem arredondar.
    2. Diferente do parseInt(), que converte uma string em um número inteiro, o Math.trunc() trabalha diretamente com números float.
*/

// Math.abs(): retorna o valor absoluto de um número, ou seja, remove o sinal negativo de um número negativo. Caso seja positivo, ele retorna o mesmo valor.
let g = -10.380;
console.log(Math.abs(g));


resultado.innerHTML = `
    O valor de ${a} com o método Math.ceil() é: ${Math.ceil(a)}. Pois 10.380 arredondado pra cima é 11.
    <hr>
    O valor de ${b} com o método Math.floor() é: ${Math.floor(b)}. Pois 10.380 arredondado pra baixo é 10.
    <hr>
    O valor de ${c} com o método Math.round() é: ${Math.round(c)}. E o valor de ${d} é: ${Math.round(d)}. Ambos foram arredondados para o inteiro mais próximo.
    <hr>
    O valor aleatório entre 0 e 1 é: ${e}.
    <hr>
    O valor de ${f} com o método Math.trunc() é: ${Math.trunc(f)}. Pois 10.380 truncado é 10. Lembrando que o Math.trunc() remove totalmente a parte decimal sem arredondar.
    <hr>
    O valor de ${g} com o método Math.abs() é: ${Math.abs(g)}. Pois 10.380 em valor absoluto é 10.380.
`