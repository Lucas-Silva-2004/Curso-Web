resultado = document.getElementById("resultado");

// 15/01/2017
let data1 = new Date(2017, 0, 15);

// 23/02/2017
let data2 = new Date(2017, 1, 23);

/* Cálculo da diferença em milisegundos entre as duas datas */
let milisegundosEntreDatas = Math.abs(data1.getTime() - data2.getTime())

/* Quantidade de milisegundos em um dia */
let milisegundosPorDia = ((1 * 24 * 60 * 60 *1000))

/* Cálculo da diferença em dias */
let calcMilisegundosParaDias = (milisegundosEntreDatas / milisegundosPorDia)



resultado.innerHTML = `
    ${data1.toString()}
    <br>
    ${data2.toString()}
    <hr>
    Data 1: ${data1.getTime()}
    <br>
    Data 2: ${data2.getTime()}
    <hr>
    Quantidade de milisegundos entre data1 e data2: ${milisegundosEntreDatas}
    <br>
    Um dia possui: ${milisegundosPorDia} milisegundos.
    <br>
    A diferença entre ${data1} e ${data2} é de: ${Math.ceil(calcMilisegundosParaDias)} dia(s).

`