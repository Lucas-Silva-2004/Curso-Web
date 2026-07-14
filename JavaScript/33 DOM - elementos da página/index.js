// document (API DOM)
/*
getElementById() - retorna o elemento que possui o id especificado
getElementsByTagName() - retorna uma coleção de elementos com o nome da tag especificada
getElementsByClassName() - retorna uma coleção de elementos com o nome da classe especificada
getElementsByName() - retorna uma coleção de elementos com o Name especificado
*/

console.log(document.getElementsByTagName("input")); // retorna uma coleção de elementos com o nome da tag especificada.
console.log(document.getElementsByClassName("campoTexto")); // retorna uma coleção de elementos com o nome da classe especificada.
console.log(document.getElementsByName("nome")); // retorna um NodeList do elemento com o Name especificado.

function acao() {
    console.log("Evento disparado");
}