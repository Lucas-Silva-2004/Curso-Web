let nome = prompt('Digite o seu nome: ');
let idade = prompt('Digite a sua idade: ');
let idade2 = 50;
/* O prompt funciona como o "scanf" do C. Ou seja, ele permite a entrada de dados pelo usuário. */

const mensagem = (nome, idade) => `Olá, ${nome}! Você tem ${idade} anos.`;

console.log(idade);
console.log(idade2);
/* OBS: O prompt sempre retorna uma string, mesmo que o usuário digite um número. */

document.getElementById("texto").textContent = mensagem(nome, idade);
/* Esta linha está recuperando o <p id="texto"> e está usando o .textContent para exibir a mensagem com as infos nome e idade */

console.log("Deu tudo certo, patrão!");