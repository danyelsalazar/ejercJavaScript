// 16. Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
// y los muestre por pantalla.

const arrayUno = [];
const arrayDos = [];

const llenarArrays = (arrayUno, arrayDos) => {
  let numUno;
  let numDos;

  for (let i = 0; i < 5; i++) {
    numUno = Math.round(Math.random() * (10 - 1) + 1);
    numDos = Math.round(Math.random() * (10 - 1) + 1);
    arrayUno[i] = numUno
    arrayDos[i] = numDos
  }
};

const mostrar = (arrayUno, arrayDos) => {
  mensaje = `ArrayUno: 
${arrayUno.join("-")}
ArrayDos :
${arrayDos.join("-")}`;

  return mensaje;
};
llenarArrays(arrayUno, arrayDos);
console.log(mostrar(arrayUno, arrayDos));