resultado = document.getElementById("resultado");
resultado2 = document.getElementById("resultado2");

/* ATENÇÃO: as informações de data e horário são obtidas localmente através do sistema operacional da máquina em que está sendo executado */

// Para a utilização do Date, precisamos primeiramente da instância new Date()
let data = new Date(); /* O new Date faz com que um novo objeto de data seja criado e atribuído à uma variável */
let data2 = new Date(); // Cria uma segunda instância de Date
data2.setDate(data2.getDate() + 1); // Adiciona 1 dia à data atual

let data3 = new Date();
data3.setMonth(data3.getMonth() + 1); // Adiciona 1 mês ao mês atual

let data4 = new Date();
data4.setFullYear(data4.getFullYear() + 1);


/* O motivo de usarmos os métodos get como parâmetros para os métodos set, é para obter o valor atual de cada componente da data e hora, permitindo assim a realização de cálculos e manipulações precisas. */



// setDate: insere o dia do mês (de 1 a 31)
// setMonth: insere o mês (de 0 a 11, com 0 sendo janeiro e 11 sendo dezembro)

resultado.innerHTML = `
    <h3>Data e hora atual</h3><br>
    DATA: ${data.toString()}
    <hr>
    <h3>Data e hora com setDate()</h3><br>
    DATA: ${data}<br>
    DATA com setDate(): ${data2}. Foi adicionado 1 dia à data atual.
    <hr>
    <h3>Data e hora com setMonth()</h3><br>
    DATA com setMonth(): ${data3}. Foi adicionado mais um mês.
    <hr>
    <h3>Data e hora com setYear()</h3><br>
    DATA com setFullYear(): ${data4}. Foi adicionado mais um ano.
    `