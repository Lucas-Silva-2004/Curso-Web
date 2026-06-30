let media = 7;
let nota = prompt('Digite a nota do aluno:');

const mensagem = document.getElementById("nota-Aluno");

if (nota < media) {
    mensagem.innerHTML = `
    O aluno está abaixo da média.
    `
}

else if (nota == media) {
    mensagem.innerHTML = `
    O aluno está na média.
    `
}

else {
    mensagem.innerHTML = `
    O aluno está acima da média
    `
}