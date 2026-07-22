// Utilizamos o método .indexOf para pesquisar o indice do elemento.

const listaFrutas = [];

listaFrutas[0] = 'Banana'
listaFrutas[1] = 'Maçã'
listaFrutas[2] = 'Morango'
listaFrutas[3] = 'Uva'

listaFrutas.push("Caqui");

let indice = listaFrutas.indexOf("Caqui");

if (indice === -1) { /* Caso o índice não exista */
    console.log("O elemento não existe");
}

else {
    console.log("O elemento existe e está na posição", indice);
}