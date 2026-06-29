var media = 7;
var nota = prompt('Digite a nota do aluno:');

if (nota < media) {
    document.write('O aluno está abaixo da média');
}

else if (nota == media) {
    document.write('O aluno está na média');
}

else if (nota >= '11') {
    document.write('Mesmo o 11 sendo uma string, o interpretador JavaScript consegue entendê-lo como um valor numérico, fazendo assim com que os number consigam ser comparados com números mesmo do tipo string.');
}

else {
    document.write('O aluno está acima da média');
}