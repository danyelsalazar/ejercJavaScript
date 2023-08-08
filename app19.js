// Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
// de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
// programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
// Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
// ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
// 0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
// de 20.

let arrayA = [];
let arrayB = [];

const llenarArrays = () =>{
    
    for (let i = 0; i < 50; i++) {
      arrayA[i] = Math.round(Math.random() * (50 - 1) + 1);
    }

    // ordeno el arrayA de menor a mayor
    arrayA.sort((a, b) => a- b);

    //lleno el arrayB
    for (let i = 0; i < 20; i++) {
        if(i < 10){
            arrayB[i] = arrayA[i];
        }
        else{
            arrayB[i] = 0.5;
        }
        
    }
}

llenarArrays();

console.log(arrayA);
console.log(arrayB);
