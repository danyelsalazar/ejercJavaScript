/*
const div = document.querySelector(".div");

const nuevoTitulo = document.createElement('h3');

nuevoTitulo.textContent = "soy h3";

div.appendChild(nuevoTitulo);
*/

const div = document.querySelector(".div");

const mensaje = div.innerHTML = "<h5>Hola danyel </h5>";
console.log(mensaje);