// A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:

// a) Determinar cual de los dos elementos de texto es mayor

// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
// operadores necesarios para obtener un resultado true y otro resultado false

// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
// dos elementos numéricos

var valores = [true, 5, false, "hola", "adios", 2];
const palabras = [];
const numeros = [];
const boleanos = [];

const llenarArrays = () => {
  valores.forEach((e) => {
    if (typeof e == "string") {
      palabras.push(e);
    } else if (typeof e == "number") {
      numeros.push(e);
    } else {
      boleanos.push(e);
    }
  });
};

llenarArrays();

const textoGrande = (palabras) => {
  let palabraGrande = palabras[0];

  palabras.forEach((e) => {
    if (e.length > palabraGrande.length) {
      palabraGrande = e;
    }
  });
  return `La palabra mas grande es: ${palabraGrande}`;
};

const operadores = (operadores) => {
  operadores.forEach((e) => {
    if (e) {
      console.log(`El boleano es: ${e}`);
    } else if (!e) {
      console.log(`El boleano es: ${e}`);
    }
  });
};

const operaciones = (numeros) => {
  const numUno = numeros[0];
  const numDos = numeros[1];

  let suma = numUno + numDos;
  let resta = numUno - numDos;
  let multiplica = numUno * numDos;
  let division = numUno / numDos;
  let potencia = Math.pow(numUno,numDos);

  let mensaje = `Suma: ${suma}
Resta: ${resta}
Multiplicacion: ${multiplica}
division: ${division}
Potencia: ${potencia}`;

  return mensaje;
};

operadores(boleanos);
console.log(textoGrande(palabras));
console.log(operaciones(numeros));
