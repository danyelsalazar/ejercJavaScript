// ejemplo 1:

function dividir(a, b) {
    try {
      if (b === 0) {
        throw new Error("No se puede dividir por cero");
      }
      return a / b;
    } catch (error) {
      // Aquí se manejará la excepción si ocurre
      console.error("Ha ocurrido un error:", error.message);
      // En este ejemplo, simplemente imprimimos el mensaje de error.
      // Dependiendo de la situación, podrías hacer otras acciones aquí.
      return null; // Podrías devolver algún valor especial para indicar que hubo un error en la división.
    }
  }
  
  const resultado1 = dividir(10, 2);
  console.log("Resultado 1:", resultado1); // Resultado 1: 5
  
  const resultado2 = dividir(10, 0);
  console.log("Resultado 2:", resultado2); // Ha ocurrido un error: No se puede dividir por cero, Resultado 2: null
  


  // practica: ejemplo 2 

  function buscarLetra (letra,palabra){
    try{
        if(!palabra.includes(letra)){
            throw new Error("La palabra no contiene esa letra");
        }
        return letra;
    }
    catch(e){
        console.error("Letra no encontrada:", e.message);
    }
  }

  let palabra = "Hola danyel";
  palabra = palabra.toLocaleLowerCase();
  let letra = "w";
  letra = letra.toLowerCase();


  const letraBuscada = buscarLetra(letra,palabra);

  console.log(`Letra: ${letraBuscada}`);