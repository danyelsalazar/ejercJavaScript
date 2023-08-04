// Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
// Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
// y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
// numero de páginas.

class Libro{
    constructor(isbn, titulo, autor, numeroPaginas){
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas
    }

    mostrarDatos(){
        console.log(`Datos del libro:
        ISBN: ${this.isbn}
        Titulo: ${this.titulo}
        Autor: ${this.autor}
        Numero de paginas: ${this.numeroPaginas}`);
    }
}

const cargarDatos = () => {

    let isbn = parseInt(prompt("Ingresa el ISBN"));
    let titulo = prompt("Ingresa el titulo del libro");
    let autor = prompt("Ingresa el autor");
    let numeroPaginas = parseInt(prompt("Ingresa la cantidad de paginas"));

    const libro = new Libro(isbn, titulo, autor, numeroPaginas);
    
    return libro;
}

let libroFinal = cargarDatos();

const mostrar = (libroFinal) => {
    let datos = ``;
    for (const clave in libroFinal) {
        const valor = libroFinal[clave] 
        datos += `${clave}: ${valor}
`
    }
    return datos;
}
console.log(mostrar(libroFinal));


//tambien podemos llamar al metodo de libro que hicimos en la clase:
// libroFinal.mostrarDatos();
