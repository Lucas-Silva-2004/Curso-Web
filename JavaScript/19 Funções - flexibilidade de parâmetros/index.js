resultado = document.getElementById("resultado");

function soma(a, b) {
    b = b === undefined ? 0 : b;
    /* Atribui 0 a b se for undefined. O código basicamente diz: se b for undefined, atribua 0 a b */
    return a + b;
}

console.log(soma(7, 7));
console.log(soma(7, 7, 9, 15));
/* Mesmo adicionando mais argumentos, a função só utilizará os dois primeiros sem a necessidade de dar erro. */
console.log(soma(7));
/* Neste caso a operação será realizada com o primeiro argumento sendo 7 e o segundo sendo undefined, resultando em NaN (Not a Number). Problema que pode ser solucionado com a lógica de atribuição padrão. */
console.log(soma());
/* Neste caso a operação será realizada com nenhum argumento (undefined + undefined) que resultará em NaN (Not a Number). */