const texto = document.getElementById('texto');

if (2 == 2 && 'b' == 'a') {
    texto.innerHTML = `
    Está correto.
    `
} else {
    texto.innerHTML = `
    Não está correto.
    `
}