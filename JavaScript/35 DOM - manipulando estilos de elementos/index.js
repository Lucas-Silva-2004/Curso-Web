function modificaEstilo(corDeFundo) {
    document.getElementById("quadrado").style.backgroundColor = corDeFundo; /* acessar a propriedade "style", mais especificamente o background-color, e atribuir a cor de fundo que foi recebida por parâmetro. */
}

// Basicamente, cada botão possui o onClick com o atributo "modificaEstilo" e cada um com suas devidas cores. No JS, atribuimos uma função ao "ModificaEstilo" que recebe as cores como parâmetro "corDeFundo", resgata a id do quadrado e aplica a cor ao quadrado de acordo com o que foi definido em cada botão.