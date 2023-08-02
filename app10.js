/*
Escribir una función flecha que reciba una palabra y la devuelva al revés. 
*/

function alreves (frase) {
    const arrayfrase = frase.split("");
    let invertido = arrayfrase.reverse().join("");
    return invertido;
}
var arrayinv = [];
var pregunta = prompt("Introduzca la frase a invertir");

arrayinv = alreves(pregunta);

console.log(arrayinv);

//forma 2:
// const alreves = (frase) => frase.split("").reverse().join("");

// const pregunta = prompt("Introduzca la palabra a invertir");
// const palabraInvertida = alreves(pregunta);

// console.log("Palabra invertida:", palabraInvertida);
