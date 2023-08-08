// Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
// muestre el siguiente array [6, 9, 12, 15, 18].


const aplanarMatriz = () =>{
    let matriz  = [[3], [6], [9], [12], [15]]
    console.log(matriz);

    // se puede usar el flat:
    let matrizAplanada = matriz.flat();

    // tambien se puede usar el map:
    let matrizAplanadaDos = matriz.map((e) => e[0]);

    console.log(matrizAplanada);
    console.log(matrizAplanadaDos);
}

aplanarMatriz();