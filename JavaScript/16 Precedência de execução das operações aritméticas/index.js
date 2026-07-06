let num1 = 10;

resultado = document.getElementById("resultado");
resultado.innerHTML = (11 + 5 - 10 * 2 / 2);
/* Primeiro serão realizadas a multiplicação e divisão */
/* Depois a soma e subtração */

resultado.innerHTML = ((11 + 5 - 10 * 2) / 2);
/* Neste caso, primeiro será realizada a multiplicação entre 10 e 2, depois a soma entre 11 e 5 e irá subtrair por 20, e por fim será dividido por dois. */