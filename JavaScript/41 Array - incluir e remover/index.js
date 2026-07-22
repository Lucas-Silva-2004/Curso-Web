// .push: Inclui o elemento no final da lista.
// .unshift: Inclui o elemento no início da lista.
// .pop: Exclui o elemento no final da lista.
// .unshift: Exclui o elemento no início da lista.

const listaCoisas = [];

listaCoisas['frutas'] = [];
listaCoisas['pessoas'] = [];

listaCoisas['frutas'];

// Método .push: Inclui elemento no final da lista.

listaCoisas['frutas'].push('Morango');
listaCoisas['frutas'].push('Banana');
listaCoisas['frutas'].unshift('Maçã');
listaCoisas['frutas'].pop();

console.log(listaCoisas);