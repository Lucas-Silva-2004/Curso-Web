// Função de distribuir caracteres entre números e letras

function distribuiCaractere() {
    // Seleciona o valor digitado
    let caractere = document.getElementById('entrada').value; /* O .value pega o valor setado na id "entrada" */
    console.log("Selecionado o valor digitado.")

    // Limpar o campo de digitação
    document.getElementById('entrada').value = ''; /* Mesmo limpando o campo de digitação, o valor do caractere já foi guardado na variável */

    caractere.trim(); // Remove espaços nas extremidades do caractere caso sejam digitados

    switch (caractere) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            document.getElementById("apenasNumeros").value += caractere; // adiciona o valor ao campo "apenasNumero" caso seja alguma das condições
            break;
        default:
            document.getElementById("apenasLetras").value += caractere; // adiciona valor ao campo "apenasLetras" caso não seja nenhuma delas, no caso letras.

        // O sinal de += concatena os números e faz com que sejam adicionados ao invés de substituir, mantendo o histórico de caracteres no campo.
    }
}