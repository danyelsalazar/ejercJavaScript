//como hacer una clase con costructor:

class Persona {
  //creeamos el constructor:
  constructor(nombre, edad, fechaNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.fechaNacimiento = fechaNacimiento;
  }
}
const p1 = new Persona("Danyel", 18, 2004);
let mensaje = ``;

for (const clave in p1) {
  const valor = p1[clave];
  mensaje += `${clave}: ${valor}
`
}
console.log(mensaje);
