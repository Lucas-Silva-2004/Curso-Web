/* As funções podem ser de dois tipos: void ou retorno. As funções void apenas realizam o processamento dos dados mas não retornam para quem fez o chamado. As de retorno realmente retornam o resultado, sendo possível atribuí-lo à uma variável, por exemplo. */
resultado = document.getElementById("resultado");

let largura = prompt("Digite a altura em metros: ");
let comprimento = prompt("Digite o comprimento em metros: ");

/* Aqui será feita a lógica da função. Pode ser estruturas de decisão, condicionais, switchs, declarar variáveis, operadores aritméticos e etc. */
function calcularAreaTerreno(largura, comprimento) {
    
    let area = largura * comprimento;
    return area;
    /* O return area faz com que a função jogue para fora do bloco o resultado. Pois sem ele, a função não retornaria nada. */
    }

/* Liga a função e guarda o resultado na variável "area". */
let area = calcularAreaTerreno(largura, comprimento);

resultado.innerHTML = `O terreno possui ${area} metros quadrados`;

