function modificaEstilo(corDeFundo, l, a) {
    document.getElementById("quadrado").style.backgroundColor = corDeFundo; /* acessar a propriedade "style", mais especificamente o background-color, e atribuir a cor de fundo que foi recebida por parâmetro. */

    document.getElementById("quadrado").style.width = l; /* acessar a propriedade "width" e define como l (largura) */

    document.getElementById("quadrado").style.height = a; /* acessar a propriedade "height" e define como a (altura) */
}

// Basicamente, cada botão possui o onClick com o atributo "modificaEstilo" e cada um com suas devidas cores. No JS, atribuimos uma função ao "ModificaEstilo" que recebe as cores como parâmetro "corDeFundo", resgata a id do quadrado e aplica a cor ao quadrado de acordo com o que foi definido em cada botão.