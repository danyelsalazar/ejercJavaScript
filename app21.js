// Escribir un programa para obtener un array de las propiedades de un objeto Persona.
// Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.

const persona = {
    nombre: "Mercedes",
    edad: 56,
    sexo: "M",
    peso: 61.3,
    altura: 1.57
};

const arrayDePersona = (persona) => {

    // forma uno:
    const valor = Object.values(persona);
    const clave = Object.keys(persona);

    const arrayUno = [];

    for (let i = 0; i < Object.keys(persona).length; i++) {
        
        arrayUno[i] = `${clave[i]}: ${valor[i]}`;
        
    }

    console.log(arrayUno);

    //forma dos:
    const arrayDos = Object.entries(persona);

    console.log(arrayDos);

}

arrayDePersona(persona);
