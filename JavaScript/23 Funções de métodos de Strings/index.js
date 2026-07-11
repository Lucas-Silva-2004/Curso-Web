resultado = document.getElementById("resultado");


// Propriedade length: retorna a quantidade de caracteres de uma string. A quantidade de caracteres começa pelo número 0
const text = "Olá, mundo!";
console.log(text.length); // Saída: 11

// Método charAt(): retorna o caractere de uma string com base no índice fornecido.
const text2 = "Lucas";
console.log(text2.charAt(0)); // Saída: L

// Método charCodeAt(): retorna o valor Unicode do caractere em um índice específico. Em outras palavras, ele retorna o código do caractere na tabela Unicode.
const text3 = "Amor";
console.log(text3.charCodeAt(0)); // Saída 65

// Método indexOf(): retorna o índice da primeira ocorrência de um caractere ou substring em uma string. Se o caractere ou substring não for encontrado, ele retorna -1.
const text4 = "Olá, mundo!";
console.log(text4.indexOf("m")); // Saída: 5

// Método replace(): com base em uma pesquisa, ele substitui um caractere ou substring por outro caractere ou substring.
const text5 = "Olá, mundo!";
console.log(text5.replace("mundo", "universo")); // Saída: Olá, universo!
/* Lembrando que o primeiro parâmetro é o que se deseja substituir e o segundo é o que será colocado no lugar. */

// Método substring(): retorna uma parte de uma string, com base nos índices fornecidos. O primeiro índice é o índice inicial e o segundo índice é o índice final (não incluído).
const text6 = "Olá, mundo!";
console.log(text6.substring(0, 7)); // Saída: Olá, mu

// Método toLowerCase(): retorna a string em letras minúsculas.
const text7 = "Olá, Mundo!";
console.log(text6.toLowerCase()); // Saída: olá, mundo

// Método toUpperCase(): retorna a string em letras MAIÚSCULAS.
const text8 = "Olá, mundo!";
console.log(text8.toUpperCase());

// Método trim(): remove os caracteres em branco das extremidades de uma string. Além de Tabs (\t), quebras de linha (\n) ou (\r).
const text9 = " -          Olá, \nmundo          - ";
console.log(text9.trim());

// Método endsWith(): verifica se uma string termina com os caracteres de uma substring específica. Retorna true ou false.
const text10 = "Olá, mundo!";
console.log(text10.endsWith("!")) // Saída: true

// Método startsWith(): verifica se uma string começa com os caracteres de uma substring específica. Retorna true ou false.
const text11 = "Olá, mundo!";
console.log(text11.startsWith("Olá")) // Saída: true

// Método includes(): verifica se uma string contém os caracteres de uma substring específica. Retorna true ou false.
const text12 = "Olá, mundo! Isso é um teste";
console.log(text12.includes("Isso"));



resultado.innerHTML = `
    A quantidade de caracteres de "${text}" é: ${text.length}
    <hr>
    O índice 0 da string "${text2}" é: ${text2.charAt(0)}
    <hr>
    O valor unicode do caractere no índice 0 da string "${text3}" é: ${text3.charCodeAt(0)}
    <hr>
    O índice da primeira ocorrência do caractere "m" na string "${text4}" é: ${text4.indexOf("m")}
    <hr>
    A string "${text5}" substituindo "mundo" por "universo" é: ${text5.replace("mundo", "universo")}
    <hr>
    A substring da string "${text6}" do índice 0 ao índice 7 é: ${text6.substring(0, 7)}
    <hr>
    A caixa baixa de "${text7}" é: ${text7.toLowerCase()}
    <hr>
    A caixa alta de "${text8}" é: ${text8.toUpperCase()}
    <hr>
    A string "${text9}" com o método trim é: ${text9.trim()}
    <hr>
    A string "${text10}" com o método endsWith("!") é: ${text10.endsWith("!")}. Ou seja, já que é true, a string realmente termina com "!".
    <hr>
    A string "${text11}" com o método startsWith("Olá") é: ${text11.startsWith("Olá")}. Ou seja, por ser true, a string realmente inicia com "Olá".
    <hr>
    A string "${text12}" com o método includes("Isso") é: ${text12.includes("Isso")}. Ou seja, por ser true, a string realmente possui com "Isso".
`