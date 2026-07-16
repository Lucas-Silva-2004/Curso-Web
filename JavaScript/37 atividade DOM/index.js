// resgata o input
let caixaTexto = document.getElementById("caixaTexto");

// Mudar pra cor amarela ao entrar no foco
const fundoAmarelo = (corDeFundo) => {
    caixaTexto.className = 'amarelo'; /* define o atributo CSS da classe "amarelo" */
    console.log("Fundo amarelo: entrou no foco");
}

// Sair do foco e o valor do input ser enviado
const sairFoco = () => {
    let texto = caixaTexto.value; /* resgata o valor do input */
    console.log("Saiu do foco.");

    if (texto.length < 3) {
        // Se a quantidade de caracteres for inferior a três, altera a classe da caixa para a classe "vermelho"
        caixaTexto.className = 'vermelho';
        console.log("Fundo vermelho: valor menor que três.");
    } else {
        // Se a quantidade de caracteres for igual ou maior que três, altera a classe para a classe "verde"
        caixaTexto.className = 'verde';
        console.log("Fundo verde: valor igual ou maior que três.");
    }
}