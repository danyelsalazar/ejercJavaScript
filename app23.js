// Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo
//     amarillo, por ejemplo)

const $parrafo = document.querySelector(".parrafo");
const $contenido = $parrafo.textContent;
const $fragment = document.createDocumentFragment();

const resaltar = ($contenido,$parrafo) => {
    let array = $contenido.split(" ");

    array.forEach((e, index) => {
        if (e.length > 8) {
            array[index] = `<b style="background-color: yellow;">${e}</b>`;
        }
    });

    const $textoContenido = array.join(" ");
    $parrafo.innerHTML = $textoContenido;
};

resaltar($contenido, $parrafo);
