const calcular = (tipo, valor) => {
    if (tipo === 'acao') {

    }
    
    else if (tipo === 'valor') {
        let valorCampo = document.getElementById('tela').value /* O valor digitado foi atribuído à variável valorCampo */
        document.getElementById('tela').value = valorCampo + valor; /* Selecionamos o input, acessamos o atributo value desse input e atribuimos o valor recebido pelo parâmetro + um novo valor. Dessa forma, é mostrada a sequência de números na tela ao invés de substituí-los cada vez que digita um novo número. */
    }
}