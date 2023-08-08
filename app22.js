const $boton = document.querySelector(".boton2"),
  $div = document.querySelector(".div"),
  $fragment = document.createDocumentFragment(),
  $input = document.querySelector(".input"),
  $h1 = document.createElement("h1");

$boton.addEventListener("click", () => {

    if($div.querySelector("h1")){
        $div.removeChild($h1);
    }
    
    $h1.textContent = `Bienvenido ${$input.value}`;

    $fragment.appendChild($h1);

    $div.appendChild($fragment);
});
