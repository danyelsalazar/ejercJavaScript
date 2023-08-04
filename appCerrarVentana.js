const boton = document.querySelector(".boton");

function cerrarVentana(){
    boton.addEventListener("click", () =>{
        console.log("me diste click");
        window.close();
    })
}

cerrarVentana();