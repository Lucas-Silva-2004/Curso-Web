resultado = document.getElementById("resultado");

function exibirArtigo(id, callbackSucesso, callbackErro) /* Receberá o id e os callbacks */ {
    // Lógica: recuperar o id via requisição http.
    if (true) {
        callbackSucesso('Funções de callback em JS', 'Funções de callback são muito utilizadas .....');
    } else {
        callbackErro('Erro ao recuperar os dados.');
    }
}

/* Nos códigos a seguir, definimos as funções de callback. Em outras palavras, definimos as ações a serem executadas quando a requisição for bem-sucedida ou falhar. */
let callbackSucesso = function(titulo, descricao) {
    /* O "titulo" recebe o primeiro parâmetro (no caso 'Funções de callback em JS') e "descricao" recebe o segundo parâmetro ("Funções de callback são muito utilizadas .....") */
    resultado.innerHTML = `
    <h1>${titulo}</h1>
    <hr>
    <p>${descricao}</p>
    `
}
let callbackErro = function(erro) {
    /* O "erro" recebe o parâmetro passado para o callback de erro */
    resultado.innerHTML = `<p style="color: red;">Erro: ${erro}</p>`;
}

exibirArtigo(1, callbackSucesso, callbackErro); /* Não utilizamos parênteses nos parâmetros pois estamos passando as funções como argumentos e não executando-as. Isso significa que estamos passando as funções em si, e não suas chamadas. */