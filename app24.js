const $inputUno = document.querySelector(".inputUno"),
  $inputDos = document.querySelector(".inputDos"),
  $boton = document.querySelector(".botonInput");

const calcularRadio = ($inputUno, $boton, $inputDos) => {
  $boton.addEventListener("click", (evento) => {
    //usamos el preventDefault() para evitar que la pagina se refresque al dar click
    evento.preventDefault();

    const area = parseFloat($inputUno.value);

    if (!isNaN(area)) {
      const radio = Math.sqrt(area / Math.PI).toFixed(2);
      $inputDos.value = radio;
      console.log(area);
    }
    else{
        $inputDos.value = 0;
    }
  });
};

calcularRadio($inputUno, $boton, $inputDos);
