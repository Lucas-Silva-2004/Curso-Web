let nome = prompt("Por favor, digite o seu nome: ");
let altura = prompt("Informe sua altura em centímetros: ");
altura = (altura / 100);

let peso = prompt("Agora digite o seu peso: ");
peso = parseFloat(peso);

resultado = document.getElementById("resultado");
resultado.innerHTML = `
    Nome: ${nome}<br>
    Altura: ${altura}<br>
    Peso: ${peso}
`