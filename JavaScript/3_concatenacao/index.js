var nome = prompt('Digite o seu nome: ');
var idade = prompt('Digite a sua idade: ');
var idade2 = 50;
/* O prompt funciona como o "scanf" do C. Ou seja, ele permite a entrada de dados pelo usuário. */

console.log(idade);
console.log(idade2);
/* OBS: O prompt sempre retorna uma string, mesmo que o usuário digite um número. */

document.write('<h1>Olá, ' + nome + '! Seja bem-vinda ao curso de JavaScript! Você tem ' + idade + ' anos.</h1>');
/* o sinal de + é usado para concatenar strings. Também devemos fechar as aspas antes e abrir depois para separar as strings da variável*/
/* Também deve ter cuidado com o contexto, pois o sinal de + também é utilizado para somar números */

console.log("Deu tudo certo, patrão!");