// Funções anônimas são funções que não possuem nome

resultado = document.getElementById("resultado");
resultado2 = document.getElementById("resultado2");

let exibirSaudacao = function () {
    resultado.innerHTML = "Olá, visitante!";
}

exibirSaudacao();
/* Aqui eu defini uma variável que armazena uma função anônima. */

let exibirSaudacaoNome = function (nome) {
    resultado2.innerHTML = `<br>Olá, ${nome}!`;
}

exibirSaudacaoNome("João");
/* Aqui eu chamo a função anônima e passo o nome como argumento. */