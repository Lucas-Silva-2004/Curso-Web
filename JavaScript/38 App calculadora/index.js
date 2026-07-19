const calcular = (tipo, valor) => {
    if (tipo === 'acao') {
        if (valor === 'c') {
            // Limpar o visor (id tela)
            document.getElementById("tela").value = ''
        }

        else if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            // Concatenar as operações. Dessa forma eles não são substituídos ao digitar diferentes operações.
            document.getElementById("tela").value += valor;
        }

        else if (valor === '=') {
            let valorCampo = eval(document.getElementById("tela").value);
            // O eval recebe uma string e tenta executá-lo como um código JS real. Muito útil para desenvolver calculadoras sem elaborar toda a lógica matemática. Neste caso, receberá todo o valor escrito na tela (o cálculo) como string e irá executá-lo como um cálculo real.
            
            document.getElementById("tela").value = valorCampo; 
        }
    }
    
    else if (tipo === 'valor') {
        let valorCampo = document.getElementById('tela').value += valor; // Concatena os valores digitados de modo que os números sejam adicionados sem substituir os anteriores
    }

    else {
        document.getElementById("tela") = 'Erro desconhecido';
    }
}