/* O JavaScript possui três escopos: global, função e bloco. */


/* 1. Escopo global: Pode ser utilizado de qualquer lugar no código. */
let nomePais = "Brasil"; // Escopo global

function mostrarPais() {
    console.log(nomePais, "Dentro da função");
}

mostrarPais();
console.log(nomePais, "Fora da função. Também funciona aqui."); // Funciona aqui fora também


/* 2. Escopo de função: Só pode ser utilizado dentro da função em que foi definida. */
function minhaCasa() {
    let senhaDoWifi = "123456"; // Escopo de função
    console.log(senhaDoWifi, "Funciona! Estamos dentro de casa.");
}

minhaCasa();

console.log(senhaDoWifi); // Erro, o JS irá dizer que a variável não está definida.


/* 3. Escopo de bloco: Trancado dentro de qualquer {} (Como um if ou for). Apenas quem estiver dentro daquele par específico de chaves o acessa. */
let usuarioLogado = true;

if (usuarioLogado) {
    let mensagemSecreta = "Bem-vindo ao sistema!"; // Escopo de bloco
    console.log(mensagemSecreta); // Funciona! Está dentro do "if"
}

console.log(mensagemSecreta); // Erro. O bloco já fechou e a variável foi trocada.