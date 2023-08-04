// Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
// resultado

let array = [1,2,3,4,5,6]

function quitar(){
    array.splice(array.length -2, 2)
    console.log(array);
}

quitar();