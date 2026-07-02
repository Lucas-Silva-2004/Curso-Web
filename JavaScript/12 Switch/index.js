/* O switch é uma estrutura de controle que permite executar diferentes blocos de código com base no valor de uma variável. A diferença entre ele e um bloco de if/else é que o switch compara o valor da variável com os casos definidos. Em resumo, o switch permite que um mesmo valor seja comparado com vários casos possíveis. */


let texto = document.getElementById("texto");

let parametro = prompt("Digite um parâmetro: ");

switch (parseInt(parametro)) {
    /* O parseInt foi necessário pois o prompt retorna os números como string. */
    case 1:
        // Se parâmetro === 1
        texto.innerHTML = "Parâmetro é 1";
        break;

    case 2:
        // Se parâmetro === 2
        texto.innerHTML = "Parâmetro é 2";
        break;

    default:
        // Se parâmetro não encontrado
        texto.innerHTML = "Parâmetro não encontrado";
        break;
}