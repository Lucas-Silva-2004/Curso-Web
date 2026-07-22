// Criando o Array principal
listaCoisas = [];

// Criando uma "gaveta" para as frutas
listaCoisas['frutas'] = [];
// Guardando a banana no índice 0
listaCoisas['frutas'] [0] = 'Banana';
listaCoisas['frutas'] [1] = 'Maçã';
listaCoisas['frutas'] [2] = 'Morango';
listaCoisas['frutas'] [3] = 'Uva';

listaCoisas['pessoas'] = [];

listaCoisas['pessoas'] ['a'] = 'José'
listaCoisas['pessoas'] ['b'] = 'João'
listaCoisas['pessoas'] ['c'] = 'Maria'


// Mostrar "uva"
console.log(listaCoisas['frutas'][3]);

// Mostrar "José"
console.log(listaCoisas['pessoas']['a']);

// Mostrar "Uva Maria"
console.log(listaCoisas['frutas'][3], listaCoisas['pessoas']['c']);

// Mostrar "João gosta de Morango".
console.log(listaCoisas['pessoas']['b'], "gosta de", listaCoisas['frutas'][2]);