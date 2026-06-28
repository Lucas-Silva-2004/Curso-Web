// NULL
/* Representa a ausência intencional de qualquer valor */
var teste = null;

// Undefined
/* Representa a ausência de valor (não inicializado) */
var teste2 = undefined;

console.log(teste);
console.log(teste2);

// Exemplo prático
var nome;
console.log(nome); // Saída: undefined (o sistema não sabe o que é)

var sobrenome = null;
console.log(sobrenome); // Saída: null (eu decidi que, por enquanto, não há sobrenome)

// Outros exemplos
/* Se o usuário não preencheu o campo, a API pode retornar null */
/* Se a propriedade se quer existe no banco de dados, ela vem como undefined */