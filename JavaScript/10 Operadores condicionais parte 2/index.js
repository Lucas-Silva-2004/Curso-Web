let aluno = prompt("Digite o nome do aluno: ");
let nota = prompt("Digite a nota do aluno: ");
nota = parseFloat(nota);

let faltas = prompt("Digite o número de faltas");
faltas = parseInt(faltas);

const maxima_faltas = 15;

const texto = document.getElementById("texto");

const erro_notaInvalida = () => {
    console.log("Nota inválida");
    alert("Nota inválida");
}

if (nota < 0 || nota > 10) {
    erro_notaInvalida();
}

else if (faltas >= maxima_faltas || nota < 7) {
    texto.innerHTML = `Reprovado`;
}

else {
    if (nota == 7) {
        texto.innerHTML = `O aluno ${aluno} está na média`
        console.log("Dentro da média");
    }

    else if (nota > 7 && nota <= 10) {
        texto.innerHTML = `O aluno ${aluno} está acima da média`
        console.log("Acima da média")
    }
}