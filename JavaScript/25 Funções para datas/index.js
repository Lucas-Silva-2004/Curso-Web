resultado = document.getElementById("resultado");
resultado2 = document.getElementById("resultado2");

/* ATENÇÃO: as informações de data e horário são obtidas localmente através do sistema operacional da máquina em que está sendo executado */

// Para a utilização do Date, precisamos primeiramente da instância new Date()
let data = new Date(); /* O new Date faz com que um novo objeto de data seja criado e atribuído à uma variável */


// getDate(): retorna o dia do mês (de 1-31)
console.log(data.getDate());

// getMonth(): retorna o mês (de 0-11, com 0 sendo janeiro e 11 sendo dezembro)
console.log(data.getMonth() + 1);
/* Podemos utilizar a soma com 1 para que Janeiro seja 1 e Dezembro 12. */

// getFullYear(): retorna o ano.
console.log(data.getFullYear());

// getMiliseconds(): retorna os milisegundos
console.log(data.getMilliseconds());

// getSeconds(): retorna os segundos
console.log(data.getSeconds());

// getMinutes: retorna os minutos
console.log(data.getMinutes());

// getHours: retorna as horas
console.log(data.getHours());

resultado.innerHTML = `
    Dia: ${data.getDate()}
    <br>
    Mês: ${data.getMonth() + 1}
    <br>
    Ano: ${data.getFullYear()}
    <br>
    Data completa: ${data.getDate()}/${data.getMonth()}/${data.getFullYear()}
`

resultado2.innerHTML = `
    Milisegundo ${data.getMilliseconds()}
    <br>
    Segundo ${data.getSeconds()}
    <br>
    Minuto: ${data.getMinutes()}
    <br>
    Hora: ${data.getHours()}

`